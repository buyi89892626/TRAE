const storageUtils = require('../../utils/storage.js');
const voiceUtils = require('../../utils/voice.js');

Page({
  data: {
    userInfo: null,
    identifyCount: 0,
    favoriteCount: 0,
    isVip: false,
    settings: {
      fontSize: 'large',
      voiceBroadcast: true,
      autoSave: true,
      theme: 'pink'
    },
    showFontSelector: false,
    fontClass: ''
  },

  onLoad() {
    this.loadData();
    this.loadSettings();
  },

  onShow() {
    this.loadData();
    this.loadSettings();
  },

  loadData() {
    const history = storageUtils.getHistory();
    const favorites = storageUtils.getFavorites();
    
    this.setData({
      identifyCount: history.length,
      favoriteCount: favorites.length,
      isVip: getApp().globalData.isVip
    });
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
      settings,
      fontClass
    });
  },

  getUserInfo() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        });
        getApp().globalData.userInfo = res.userInfo;
        wx.setStorageSync('user_info', res.userInfo);
      }
    });
  },

  toggleVoiceBroadcast(e) {
    const value = e.detail.value;
    voiceUtils.vibrateShort();
    
    const settings = {
      ...this.data.settings,
      voiceBroadcast: value
    };
    
    storageUtils.saveSettings(settings);
    this.setData({ settings });
    
    wx.showToast({
      title: value ? '语音播报已开启' : '语音播报已关闭',
      icon: 'none'
    });
  },

  toggleAutoSave(e) {
    const value = e.detail.value;
    voiceUtils.vibrateShort();
    
    const settings = {
      ...this.data.settings,
      autoSave: value
    };
    
    storageUtils.saveSettings(settings);
    this.setData({ settings });
  },

  selectFontSize() {
    voiceUtils.vibrateShort();
    this.setData({ showFontSelector: true });
  },

  confirmFontSize(e) {
    const size = e.currentTarget.dataset.size;
    voiceUtils.vibrateShort();
    
    const settings = {
      ...this.data.settings,
      fontSize: size
    };
    
    storageUtils.saveSettings(settings);
    getApp().globalData.userSettings = settings;
    
    let fontClass = '';
    if (size === 'xlarge') {
      fontClass = 'text-xlarge';
    } else if (size === 'large') {
      fontClass = 'text-large';
    }
    
    this.setData({ 
      settings,
      fontClass,
      showFontSelector: false
    });
    
    wx.showToast({
      title: '字体大小已更新',
      icon: 'success'
    });
  },

  closeFontSelector() {
    this.setData({ showFontSelector: false });
  },

  goToCollection() {
    wx.navigateTo({
      url: '/pages/collection/collection'
    });
  },

  goToVip() {
    voiceUtils.vibrateShort();
    wx.showModal({
      title: '升级花仙子VIP',
      content: 'VIP特权：\n🌸 无限次云端高精度识别\n🌺 稀有花卉专属识别\n💐 高清花卉图鉴\n📜 全部花语诗词解锁\n\n首月仅需9.9元',
      confirmText: '立即开通',
      confirmColor: '#FF6B9D',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: 'VIP功能开发中',
            icon: 'none'
          });
        }
      }
    });
  },

  goToFeedback() {
    voiceUtils.vibrateShort();
    wx.showToast({
      title: '反馈功能开发中',
      icon: 'none'
    });
  },

  goToAbout() {
    voiceUtils.vibrateShort();
    wx.showModal({
      title: '关于赏花仙子',
      content: '赏花仙子 v1.0.0\n\n一款专注于花卉识别的小程序，让您随时随地了解身边的花草植物。\n\n🌸 拍照识花\n🌺 花卉百科\n💐 花语诗签\n👥 花友社区',
      showCancel: false,
      confirmText: '好的',
      confirmColor: '#FF6B9D'
    });
  },

  clearCache() {
    voiceUtils.vibrateShort();
    wx.showModal({
      title: '清除缓存',
      content: '确定要清除所有缓存数据吗？这不会删除您的收藏和识别记录。',
      confirmColor: '#FF6B9D',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorageSync();
          wx.showToast({
            title: '缓存已清除',
            icon: 'success'
          });
        }
      }
    });
  },

  onShareAppMessage() {
    return {
      title: '赏花仙子 - 拍照识花，遇见花开的美好',
      path: '/pages/index/index'
    };
  }
});
