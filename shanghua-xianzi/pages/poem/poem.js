const mockFlowers = require('../../utils/mockFlowers.js');
const voiceUtils = require('../../utils/voice.js');
const storageUtils = require('../../utils/storage.js');

Page({
  data: {
    currentTab: 0,
    dailyPoem: null,
    poemList: [],
    flowerLanguageList: [],
    todayDate: '',
    fontClass: '',
    collectedPoems: []
  },

  onLoad() {
    this.loadDate();
    this.loadData();
    this.loadSettings();
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
    this.setData({ fontClass });
  },

  loadDate() {
    const now = new Date();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const dateStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${weekdays[now.getDay()]}`;
    this.setData({ todayDate: dateStr });
  },

  loadData() {
    const poems = mockFlowers.getPoems();
    const dailyPoem = mockFlowers.getRandomPoem();
    
    const allFlowers = mockFlowers.getAll();
    const flowerLanguageList = allFlowers.map(f => ({
      id: f.id,
      name: f.name,
      flowerLanguage: f.flowerLanguage,
      poem: f.poem,
      poemAuthor: f.poemAuthor
    }));

    this.setData({
      dailyPoem,
      poemList: poems,
      flowerLanguageList
    });

    setTimeout(() => {
      voiceUtils.speak(`今日花语，${dailyPoem.flower}，${dailyPoem.content}`);
    }, 500);
  },

  switchTab(e) {
    const tab = parseInt(e.currentTarget.dataset.tab);
    voiceUtils.vibrateShort();
    this.setData({ currentTab: tab });
  },

  playPoem(e) {
    const content = e.currentTarget.dataset.content;
    voiceUtils.vibrateShort();
    voiceUtils.speak(content);
  },

  collectPoem(e) {
    const id = e.currentTarget.dataset.id;
    voiceUtils.vibrateShort();
    
    const collected = this.data.collectedPoems.includes(id);
    let newCollected;
    
    if (collected) {
      newCollected = this.data.collectedPoems.filter(p => p !== id);
      wx.showToast({
        title: '已取消收藏',
        icon: 'none'
      });
    } else {
      newCollected = [...this.data.collectedPoems, id];
      wx.showToast({
        title: '收藏成功',
        icon: 'success'
      });
    }
    
    this.setData({ collectedPoems: newCollected });
  },

  sharePoem() {
    voiceUtils.vibrateShort();
    wx.showToast({
      title: '分享功能开发中',
      icon: 'none'
    });
  },

  generateCard() {
    voiceUtils.vibrateShort();
    wx.showToast({
      title: '生成诗签卡片',
      icon: 'none'
    });
  },

  goToFlowerDetail(e) {
    const id = e.currentTarget.dataset.id;
    voiceUtils.vibrateShort();
    wx.navigateTo({
      url: `/pages/result/result?flowerId=${id}`
    });
  },

  nextPoem() {
    voiceUtils.vibrateShort();
    const dailyPoem = mockFlowers.getRandomPoem();
    this.setData({ dailyPoem });
    voiceUtils.speak(`${dailyPoem.flower}，${dailyPoem.content}`);
  },

  onShareAppMessage() {
    const { dailyPoem } = this.data;
    return {
      title: `赏花仙子 - ${dailyPoem.flower}花语`,
      path: '/pages/index/index'
    };
  }
});
