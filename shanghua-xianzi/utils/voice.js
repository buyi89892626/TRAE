const voiceUtils = {
  innerAudioContext: null,
  isSpeaking: false,

  init() {
    if (!this.innerAudioContext) {
      this.innerAudioContext = wx.createInnerAudioContext();
      this.innerAudioContext.onEnded(() => {
        this.isSpeaking = false;
      });
      this.innerAudioContext.onError(() => {
        this.isSpeaking = false;
      });
    }
  },

  speak(text, options = {}) {
    const settings = wx.getStorageSync('user_settings') || {};
    if (settings.voiceBroadcast === false) {
      return;
    }

    if (this.isSpeaking) {
      this.stop();
    }

    const plugin = requirePlugin('WechatSI');
    if (plugin && plugin.textToSpeech) {
      plugin.textToSpeech({
        lang: 'zh_CN',
        tts: true,
        content: text,
        success: (res) => {
          if (res.filename) {
            this.init();
            this.innerAudioContext.src = res.filename;
            this.innerAudioContext.play();
            this.isSpeaking = true;
          }
        },
        fail: (err) => {
          console.log('语音播报失败:', err);
        }
      });
    } else {
      console.log('未安装微信同声传译插件，跳过语音播报');
    }
  },

  stop() {
    if (this.innerAudioContext) {
      this.innerAudioContext.stop();
      this.isSpeaking = false;
    }
  },

  vibrateShort() {
    wx.vibrateShort({
      type: 'medium'
    });
  },

  vibrateLong() {
    wx.vibrateLong();
  }
};

module.exports = voiceUtils;
