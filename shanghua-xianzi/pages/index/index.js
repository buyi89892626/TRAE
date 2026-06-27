const identifyService = require('../../utils/identifyService.js');
const imageUtils = require('../../utils/image.js');
const voiceUtils = require('../../utils/voice.js');
const storageUtils = require('../../utils/storage.js');

Page({
  data: {
    bannerList: [],
    recommendFlowers: [],
    dailyPoem: null,
    todayDate: '',
    identifyCount: 0,
    isVip: false,
    fontClass: ''
  },

  onLoad() {
    this.loadData();
    this.loadSettings();
  },

  onShow() {
    this.loadHistoryCount();
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
    this.setData({ fontClass });
  },

  loadData() {
    const now = new Date();
    const dateStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
    
    const mockFlowers = require('../../utils/mockFlowers.js');
    const dailyPoem = mockFlowers.getRandomPoem();
    const recommendFlowers = mockFlowers.getRandomFlowers(4);
    
    const bannerList = [
      {
        id: 1,
        title: '春日赏花指南',
        subtitle: '三月桃花笑春风',
        color: 'linear-gradient(135deg, #FF6B9D 0%, #FFA07A 100%)'
      },
      {
        id: 2,
        title: '花仙子陪你',
        subtitle: '一花一世界，一叶一菩提',
        color: 'linear-gradient(135deg, #C44569 0%, #F8B500 100%)'
      },
      {
        id: 3,
        title: '每日花语',
        subtitle: '读懂花的语言',
        color: 'linear-gradient(135deg, #9C27B0 0%, #E040FB 100%)'
      }
    ];

    this.setData({
      bannerList,
      dailyPoem,
      recommendFlowers,
      todayDate: dateStr,
      isVip: getApp().globalData.isVip
    });
  },

  loadHistoryCount() {
    const history = storageUtils.getHistory();
    this.setData({
      identifyCount: history.length
    });
  },

  goToCamera() {
    voiceUtils.vibrateShort();
    wx.navigateTo({
      url: '/pages/camera/camera'
    });
  },

  chooseFromAlbum() {
    voiceUtils.vibrateShort();
    const that = this;
    
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success: async (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath;
        await that.identifyFlower(tempFilePath);
      },
      fail: (err) => {
        console.log('选择图片失败:', err);
      }
    });
  },

  async identifyFlower(imgPath) {
    wx.showLoading({
      title: '仙子识别中...',
      mask: true
    });

    voiceUtils.speak('正在识别，请稍等');

    try {
      const preprocessed = await imageUtils.preprocessImage(imgPath);
      const result = await identifyService.identify(preprocessed.base64, {
        useMock: true,
        topN: 3
      });

      wx.hideLoading();

      if (result.success && result.results.length > 0) {
        const topResult = result.results[0];
        
        storageUtils.addHistory({
          flowerId: topResult.id,
          name: topResult.name,
          alias: topResult.alias,
          image: imgPath,
          score: topResult.score,
          category: topResult.category || 'flower'
        });

        voiceUtils.speak(`识别成功，这是${topResult.name}`);

        wx.navigateTo({
          url: `/pages/result/result?flowerId=${topResult.id}&name=${encodeURIComponent(topResult.name)}&img=${encodeURIComponent(imgPath)}&score=${topResult.score}`
        });
      } else {
        wx.showToast({
          title: '未识别出花卉，请重试',
          icon: 'none',
          duration: 2000
        });
        voiceUtils.speak('没有识别出花卉，请对准花朵再试一次');
      }
    } catch (error) {
      wx.hideLoading();
      console.error('识别失败:', error);
      wx.showToast({
        title: '识别失败，请重试',
        icon: 'none',
        duration: 2000
      });
    }
  },

  goToCollection() {
    wx.navigateTo({
      url: '/pages/collection/collection'
    });
  },

  goToFlowerDetail(e) {
    const flowerId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/result/result?flowerId=${flowerId}`
    });
  },

  goToPoem() {
    wx.switchTab({
      url: '/pages/poem/poem'
    });
  },

  goToCommunity() {
    wx.switchTab({
      url: '/pages/community/community'
    });
  },

  onShareAppMessage() {
    return {
      title: '赏花仙子 - 拍照识花，遇见花开的美好',
      path: '/pages/index/index'
    };
  }
});
