const mockFlowers = require('./mockFlowers.js');

const identifyService = {
  API_URL: 'https://api.example.com/flower/identify',
  API_KEY: '',

  async identify(imgBase64, options = {}) {
    const useMock = options.useMock !== false;
    
    if (useMock) {
      return this.mockIdentify(imgBase64, options);
    } else {
      return this.realIdentify(imgBase64, options);
    }
  },

  async realIdentify(imgBase64, options = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.API_URL,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          key: this.API_KEY,
          img: imgBase64,
          ...options
        },
        success: (res) => {
          if (res.data && res.data.code === 200) {
            resolve(this.formatResult(res.data.data));
          } else {
            reject(res.data || new Error('识别失败'));
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  },

  mockIdentify(imgBase64, options = {}) {
    return new Promise((resolve) => {
      const delay = 800 + Math.random() * 1000;
      
      setTimeout(() => {
        const count = options.topN || 3;
        const allFlowers = mockFlowers.getAll();
        const shuffled = allFlowers.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, count);
        
        const results = selected.map((flower, index) => {
          const baseScore = 0.98 - index * 0.08;
          const score = Math.max(0.5, baseScore + (Math.random() - 0.5) * 0.05);
          return {
            ...flower,
            score: parseFloat(score.toFixed(4)),
            isVipOnly: index >= 1
          };
        });
        
        resolve({
          success: true,
          results: results,
          total: results.length
        });
      }, delay);
    });
  },

  formatResult(data) {
    if (!data || !Array.isArray(data)) {
      return { results: [], total: 0 };
    }
    
    return {
      success: true,
      results: data.map(item => ({
        flowerId: item.id || item.flowerId,
        name: item.name,
        alias: item.alias || '',
        score: item.score || item.confidence || 0,
        image: item.img || item.image || '',
        info: item.info || {},
        isVipOnly: item.isVipOnly || false
      })),
      total: data.length
    };
  },

  getFlowerDetail(flowerId) {
    return new Promise((resolve) => {
      const flower = mockFlowers.getById(flowerId);
      setTimeout(() => {
        resolve(flower || null);
      }, 200);
    });
  },

  searchFlowers(keyword) {
    return new Promise((resolve) => {
      const all = mockFlowers.getAll();
      const results = all.filter(f => 
        f.name.includes(keyword) || 
        (f.alias && f.alias.includes(keyword))
      );
      setTimeout(() => {
        resolve(results);
      }, 300);
    });
  },

  getFlowersByCategory(category) {
    return new Promise((resolve) => {
      const all = mockFlowers.getAll();
      const results = all.filter(f => f.category === category);
      setTimeout(() => {
        resolve(results);
      }, 200);
    });
  }
};

module.exports = identifyService;
