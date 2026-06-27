const identifyService = require('../../utils/identifyService.js');
const imageUtils = require('../../utils/image.js');
const voiceUtils = require('../../utils/voice.js');
const storageUtils = require('../../utils/storage.js');

Page({
  data: {
    flash: 'off',
    devicePosition: 'back',
    isShooting: false,
    showGuide: true,
    guideText: '把花朵放进粉色框内，对准花瓣叶片',
    isBlurry: false,
    previewImage: '',
    showPreview: false,
    cameraReady: false
  },

  onLoad() {
    this.ctx = wx.createCameraContext();
    
    setTimeout(() => {
      voiceUtils.speak('请把花朵放进粉色取景框内，对准花瓣和叶片');
    }, 500);
  },

  onUnload() {
    voiceUtils.stop();
  },

  toggleFlash() {
    voiceUtils.vibrateShort();
    const flashModes = ['off', 'on', 'auto', 'torch'];
    const currentIndex = flashModes.indexOf(this.data.flash);
    const nextIndex = (currentIndex + 1) % flashModes.length;
    const nextFlash = flashModes[nextIndex];
    
    this.setData({
      flash: nextFlash
    });
    
    const flashNames = {
      'off': '闪光灯关闭',
      'on': '闪光灯开启',
      'auto': '自动闪光',
      'torch': '补光模式'
    };
    
    wx.showToast({
      title: flashNames[nextFlash],
      icon: 'none',
      duration: 1000
    });
  },

  switchCamera() {
    voiceUtils.vibrateShort();
    const newPosition = this.data.devicePosition === 'back' ? 'front' : 'back';
    this.setData({
      devicePosition: newPosition
    });
  },

  takePhoto() {
    if (this.data.isShooting) return;
    
    voiceUtils.vibrateShort();
    this.setData({ isShooting: true });
    
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        const tempImagePath = res.tempImagePath;
        this.setData({
          previewImage: tempImagePath,
          showPreview: true,
          isShooting: false
        });
        voiceUtils.speak('照片拍摄成功，正在识别花卉');
      },
      fail: (err) => {
        console.log('拍照失败:', err);
        this.setData({ isShooting: false });
        wx.showToast({
          title: '拍照失败，请重试',
          icon: 'none'
        });
      }
    });
  },

  chooseFromAlbum() {
    voiceUtils.vibrateShort();
    const that = this;
    
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath;
        that.setData({
          previewImage: tempFilePath,
          showPreview: true
        });
      }
    });
  },

  retakePhoto() {
    voiceUtils.vibrateShort();
    this.setData({
      showPreview: false,
      previewImage: ''
    });
  },

  async confirmIdentify() {
    if (!this.data.previewImage) return;
    
    wx.showLoading({
      title: '仙子识别中...',
      mask: true
    });

    try {
      const preprocessed = await imageUtils.preprocessImage(this.data.previewImage);
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
          image: this.data.previewImage,
          score: topResult.score,
          category: topResult.category || 'flower'
        });

        voiceUtils.speak(`识别成功，这是${topResult.name}`);

        wx.redirectTo({
          url: `/pages/result/result?flowerId=${topResult.id}&name=${encodeURIComponent(topResult.name)}&img=${encodeURIComponent(this.data.previewImage)}&score=${topResult.score}`
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

  onCameraError(e) {
    console.log('相机错误:', e.detail);
    wx.showModal({
      title: '相机权限申请',
      content: '需要相机权限才能拍照识花，是否去设置开启？',
      confirmText: '去设置',
      success: (res) => {
        if (res.confirm) {
          wx.openSetting();
        } else {
          wx.navigateBack();
        }
      }
    });
  },

  onCameraInitDone() {
    this.setData({ cameraReady: true });
  },

  goBack() {
    wx.navigateBack();
  }
});
