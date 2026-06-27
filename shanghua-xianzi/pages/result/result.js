const identifyService = require('../../utils/identifyService.js');
const voiceUtils = require('../../utils/voice.js');
const storageUtils = require('../../utils/storage.js');

Page({
  data: {
    flower: null,
    userImage: '',
    score: 0,
    scorePercent: '0%',
    scoreLevel: 'high',
    isFavorite: false,
    currentTab: 0,
    showMoreCandidates: false,
    candidates: [],
    fontClass: '',
    isVip: false,
    loading: true
  },

  onLoad(options) {
    const flowerId = options.flowerId;
    const img = options.img ? decodeURIComponent(options.img) : '';
    const score = options.score ? parseFloat(options.score) : 0;
    
    this.setData({
      userImage: img,
      score: score
    });
    
    this.loadFlowerDetail(flowerId);
    this.loadSettings();
    this.calculateScoreLevel(score);
  },

  onShow() {
    this.loadSettings();
  },

  loadSettings() {
    const settings = storageUtils.getSettings();
    let fontClass = '';
    if (settings.fontSize === 'xlarge') {
      fontClass = 'text-xlarge';
    } else if (settings.fontSize === 'large') {
      fontClass = 'text-large';
    }
    this.setData({ 
      fontClass,
      isVip: getApp().globalData.isVip
    });
  },

  async loadFlowerDetail(flowerId) {
    try {
      const flower = await identifyService.getFlowerDetail(flowerId);
      
      if (flower) {
        const isFav = storageUtils.isFavorite(flower.name);
        
        const mockFlowers = require('../../utils/mockFlowers.js');
        const allFlowers = mockFlowers.getAll();
        const candidates = allFlowers
          .filter(f => f.id !== flowerId)
          .sort(() => Math.random() - 0.5)
          .slice(0, 2)
          .map((f, i) => ({
            ...f,
            score: (0.85 - i * 0.1 + Math.random() * 0.05).toFixed(4)
          }));
        
        this.setData({
          flower,
          isFavorite: isFav,
          candidates,
          loading: false
        });
        
        setTimeout(() => {
          voiceUtils.speak(`这是${flower.name}，${flower.description.substring(0, 50)}`);
        }, 300);
      } else {
        this.setData({ loading: false });
        wx.showToast({
          title: '未找到花卉信息',
          icon: 'none'
        });
      }
    } catch (error) {
      console.error('加载花卉详情失败:', error);
      this.setData({ loading: false });
    }
  },

  calculateScoreLevel(score) {
    const percent = (score * 100).toFixed(1) + '%';
    let level = 'high';
    if (score >= 0.9) {
      level = 'high';
    } else if (score >= 0.7) {
      level = 'medium';
    } else {
      level = 'low';
    }
    this.setData({
      scorePercent: percent,
      scoreLevel: level
    });
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    voiceUtils.vibrateShort();
    this.setData({ currentTab: tab });
  },

  toggleFavorite() {
    voiceUtils.vibrateShort();
    
    const { flower, userImage, isFavorite } = this.data;
    
    if (isFavorite) {
      const favorites = storageUtils.getFavorites();
      const item = favorites.find(f => f.name === flower.name);
      if (item) {
        storageUtils.removeFavorite(item.id);
      }
      wx.showToast({
        title: '已取消收藏',
        icon: 'none'
      });
    } else {
      storageUtils.addFavorite({
        flowerId: flower.id,
        name: flower.name,
        alias: flower.alias,
        image: userImage || '',
        category: flower.category,
        flowerLanguage: flower.flowerLanguage
      });
      wx.showToast({
        title: '收藏成功',
        icon: 'success'
      });
    }
    
    this.setData({
      isFavorite: !isFavorite
    });
  },

  shareToCommunity() {
    voiceUtils.vibrateShort();
    wx.showToast({
      title: '已分享到花友圈',
      icon: 'success'
    });
  },

  playVoice() {
    const { flower } = this.data;
    if (flower) {
      voiceUtils.speak(`${flower.name}，${flower.description}。${flower.care ? '养护要点：' + flower.care.water + '。' + flower.care.light : ''}`);
    }
  },

  goBack() {
    wx.navigateBack();
  },

  goHome() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  showCandidate(e) {
    const id = e.currentTarget.dataset.id;
    voiceUtils.vibrateShort();
    wx.redirectTo({
      url: `/pages/result/result?flowerId=${id}`
    });
  },

  onShareAppMessage() {
    const { flower } = this.data;
    return {
      title: `赏花仙子 - 原来这是${flower ? flower.name : '美丽的花'}`,
      path: '/pages/index/index'
    };
  },

  saveImage() {
    if (!this.data.userImage) return;
    
    wx.showActionSheet({
      itemList: ['保存图片到相册'],
      success: (res) => {
        if (res.tapIndex === 0) {
          wx.saveImageToPhotosAlbum({
            filePath: this.data.userImage,
            success: () => {
              wx.showToast({
                title: '保存成功',
                icon: 'success'
              });
            },
            fail: () => {
              wx.showToast({
                title: '保存失败',
                icon: 'none'
              });
            }
          });
        }
      }
    });
  }
});
