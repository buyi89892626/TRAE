const imageUtils = {
  compressImage(src, quality = 60, maxWidth = 640, maxHeight = 640) {
    return new Promise((resolve, reject) => {
      wx.compressImage({
        src: src,
        quality: quality,
        compressedWidth: maxWidth,
        compressedHeight: maxHeight,
        success: (res) => {
          resolve(res.tempFilePath);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  },

  imageToBase64(filePath) {
    return new Promise((resolve, reject) => {
      wx.getFileSystemManager().readFile({
        filePath: filePath,
        encoding: 'base64',
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  },

  getImageInfo(src) {
    return new Promise((resolve, reject) => {
      wx.getImageInfo({
        src: src,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  },

  async preprocessImage(imgPath) {
    try {
      const compressedPath = await this.compressImage(imgPath, 65, 800, 800);
      const base64 = await this.imageToBase64(compressedPath);
      const imgInfo = await this.getImageInfo(compressedPath);
      
      return {
        path: compressedPath,
        base64: base64,
        width: imgInfo.width,
        height: imgInfo.height,
        size: imgInfo.size
      };
    } catch (error) {
      console.error('图片预处理失败:', error);
      throw error;
    }
  },

  saveImageToAlbum(tempFilePath) {
    return new Promise((resolve, reject) => {
      wx.saveImageToPhotosAlbum({
        filePath: tempFilePath,
        success: resolve,
        fail: reject
      });
    });
  }
};

module.exports = imageUtils;
