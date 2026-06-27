App({
  onLaunch() {
    this.initStorage();
    this.loadUserSettings();
  },

  initStorage() {
    const history = wx.getStorageSync('identify_history');
    if (!history) {
      wx.setStorageSync('identify_history', []);
    }
    const favorites = wx.getStorageSync('favorites');
    if (!favorites) {
      wx.setStorageSync('favorites', []);
    }
  },

  loadUserSettings() {
    const settings = wx.getStorageSync('user_settings');
    if (!settings) {
      this.globalData.userSettings = {
        fontSize: 'large',
        voiceBroadcast: true,
        autoSave: true,
        theme: 'pink'
      };
      wx.setStorageSync('user_settings', this.globalData.userSettings);
    } else {
      this.globalData.userSettings = settings;
    }
  },

  globalData: {
    userSettings: null,
    isVip: false,
    identifyCount: 0,
    userInfo: null
  }
});
