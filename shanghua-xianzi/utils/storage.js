const storageUtils = {
  HISTORY_KEY: 'identify_history',
  FAVORITES_KEY: 'favorites',
  SETTINGS_KEY: 'user_settings',

  addHistory(item) {
    const history = this.getHistory();
    const newItem = {
      ...item,
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      time: new Date().toISOString()
    };
    history.unshift(newItem);
    if (history.length > 100) {
      history.pop();
    }
    wx.setStorageSync(this.HISTORY_KEY, history);
    return newItem;
  },

  getHistory() {
    return wx.getStorageSync(this.HISTORY_KEY) || [];
  },

  clearHistory() {
    wx.setStorageSync(this.HISTORY_KEY, []);
  },

  removeHistory(id) {
    const history = this.getHistory();
    const newHistory = history.filter(item => item.id !== id);
    wx.setStorageSync(this.HISTORY_KEY, newHistory);
    return newHistory;
  },

  addFavorite(item) {
    const favorites = this.getFavorites();
    const exists = favorites.find(fav => 
      fav.flowerId === item.flowerId || fav.name === item.name
    );
    if (exists) {
      return false;
    }
    const newItem = {
      ...item,
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      favoriteTime: new Date().toISOString()
    };
    favorites.unshift(newItem);
    wx.setStorageSync(this.FAVORITES_KEY, favorites);
    return newItem;
  },

  removeFavorite(id) {
    const favorites = this.getFavorites();
    const newFavorites = favorites.filter(item => item.id !== id);
    wx.setStorageSync(this.FAVORITES_KEY, newFavorites);
    return newFavorites;
  },

  getFavorites() {
    return wx.getStorageSync(this.FAVORITES_KEY) || [];
  },

  isFavorite(flowerName) {
    const favorites = this.getFavorites();
    return favorites.some(item => item.name === flowerName);
  },

  getSettings() {
    return wx.getStorageSync(this.SETTINGS_KEY) || {
      fontSize: 'large',
      voiceBroadcast: true,
      autoSave: true,
      theme: 'pink'
    };
  },

  saveSettings(settings) {
    wx.setStorageSync(this.SETTINGS_KEY, settings);
  },

  getHistoryByCategory(category) {
    const history = this.getHistory();
    if (!category || category === 'all') {
      return history;
    }
    return history.filter(item => item.category === category);
  },

  getHistoryGroupedByDate() {
    const history = this.getHistory();
    const groups = {};
    history.forEach(item => {
      const date = item.time ? item.time.split('T')[0] : '未知';
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(item);
    });
    return groups;
  }
};

module.exports = storageUtils;
