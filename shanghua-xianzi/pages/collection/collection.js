const storageUtils = require('../../utils/storage.js');
const voiceUtils = require('../../utils/voice.js');
const mockFlowers = require('../../utils/mockFlowers.js');

Page({
  data: {
    currentTab: 0,
    categories: [],
    currentCategory: 'all',
    historyList: [],
    favoriteList: [],
    filteredHistory: [],
    fontClass: '',
    searchKeyword: ''
  },

  onLoad() {
    this.loadCategories();
    this.loadData();
    this.loadSettings();
  },

  onShow() {
    this.loadData();
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

  loadCategories() {
    const categories = mockFlowers.getCategories();
    this.setData({ categories });
  },

  loadData() {
    const history = storageUtils.getHistory();
    const favorites = storageUtils.getFavorites();
    
    const historyWithEmoji = history.map(item => ({
      ...item,
      displayTime: this.formatTime(item.time)
    }));
    
    const favoritesWithEmoji = favorites.map(item => ({
      ...item,
      displayTime: this.formatTime(item.favoriteTime || item.time)
    }));

    this.setData({
      historyList: historyWithEmoji,
      favoriteList: favoritesWithEmoji
    });
    
    this.filterHistory();
  },

  formatTime(isoTime) {
    if (!isoTime) return '';
    const date = new Date(isoTime);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${month}月${day}日 ${hour}:${minute}`;
  },

  switchTab(e) {
    const tab = parseInt(e.currentTarget.dataset.tab);
    voiceUtils.vibrateShort();
    this.setData({ currentTab: tab });
  },

  switchCategory(e) {
    const category = e.currentTarget.dataset.category;
    voiceUtils.vibrateShort();
    this.setData({ currentCategory: category });
    this.filterHistory();
  },

  filterHistory() {
    const { historyList, currentCategory, searchKeyword, currentTab, favoriteList } = this.data;
    
    let list = currentTab === 0 ? historyList : favoriteList;
    
    if (currentCategory !== 'all') {
      list = list.filter(item => item.category === currentCategory);
    }
    
    if (searchKeyword) {
      list = list.filter(item => 
        item.name.includes(searchKeyword) || 
        (item.alias && item.alias.includes(searchKeyword))
      );
    }
    
    this.setData({
      filteredHistory: list
    });
  },

  onSearchInput(e) {
    const keyword = e.detail.value;
    this.setData({ searchKeyword: keyword });
    this.filterHistory();
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    const img = e.currentTarget.dataset.img;
    voiceUtils.vibrateShort();
    
    let url = `/pages/result/result?flowerId=${id}`;
    if (name) url += `&name=${encodeURIComponent(name)}`;
    if (img) url += `&img=${encodeURIComponent(img)}`;
    
    wx.navigateTo({ url });
  },

  deleteHistory(e) {
    const id = e.currentTarget.dataset.id;
    voiceUtils.vibrateShort();
    
    wx.showModal({
      title: '删除记录',
      content: '确定要删除这条识别记录吗？',
      confirmColor: '#FF6B9D',
      success: (res) => {
        if (res.confirm) {
          storageUtils.removeHistory(id);
          this.loadData();
          wx.showToast({
            title: '已删除',
            icon: 'success'
          });
        }
      }
    });
  },

  removeFavorite(e) {
    const id = e.currentTarget.dataset.id;
    voiceUtils.vibrateShort();
    
    wx.showModal({
      title: '取消收藏',
      content: '确定要取消收藏这朵花吗？',
      confirmColor: '#FF6B9D',
      success: (res) => {
        if (res.confirm) {
          storageUtils.removeFavorite(id);
          this.loadData();
          wx.showToast({
            title: '已取消收藏',
            icon: 'none'
          });
        }
      }
    });
  },

  clearAllHistory() {
    voiceUtils.vibrateShort();
    
    wx.showModal({
      title: '清空记录',
      content: '确定要清空所有识别记录吗？此操作不可恢复。',
      confirmColor: '#FF6B9D',
      success: (res) => {
        if (res.confirm) {
          storageUtils.clearHistory();
          this.loadData();
          wx.showToast({
            title: '已清空',
            icon: 'success'
          });
        }
      }
    });
  },

  goToIdentify() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
});
