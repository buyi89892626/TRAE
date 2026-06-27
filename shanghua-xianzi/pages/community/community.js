const voiceUtils = require('../../utils/voice.js');
const storageUtils = require('../../utils/storage.js');

Page({
  data: {
    currentTab: 0,
    postList: [],
    hotTopics: [],
    fontClass: ''
  },

  onLoad() {
    this.loadMockData();
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

  loadMockData() {
    const hotTopics = [
      { id: 1, name: '#春日赏花记#', count: '2.3万' },
      { id: 2, name: '#阳台养花日记#', count: '1.8万' },
      { id: 3, name: '#多肉养护心得#', count: '9856' },
      { id: 4, name: '#月季病虫害防治#', count: '7623' },
      { id: 5, name: '#中国传统名花#', count: '5432' }
    ];

    const postList = [
      {
        id: 1,
        user: {
          name: '花仙子小美',
          avatar: '👩',
          level: '养花达人'
        },
        content: '今天在公园遇到了一大片月季花，开得太美了！粉色和红色交织在一起，像一幅画一样。用赏花仙子识别了一下，是粉和平月季，大家觉得美吗？',
        images: ['🌹', '🌺', '🌸'],
        flower: '月季',
        location: '朝阳公园',
        time: '2小时前',
        likes: 328,
        comments: 56,
        isLiked: false
      },
      {
        id: 2,
        user: {
          name: '多肉爱好者老王',
          avatar: '👨',
          level: '多肉专家'
        },
        content: '分享一下我的多肉阳台，经过一年的精心养护，终于有了小成！最近发现桃蛋开始出状态了，粉粉的超级可爱。有什么养护问题欢迎交流~',
        images: ['🌵', '🪴'],
        flower: '多肉植物',
        location: '自家阳台',
        time: '5小时前',
        likes: 567,
        comments: 89,
        isLiked: true
      },
      {
        id: 3,
        user: {
          name: '爱花的张阿姨',
          avatar: '👵',
          level: '资深花友'
        },
        content: '用赏花仙子认出来这是茉莉花，终于知道我家那盆花的名字了！每天早上都能闻到花香，心情特别好。茉莉真的很好养，推荐给新手花友们！',
        images: ['🌼'],
        flower: '茉莉花',
        location: '家中庭院',
        time: '昨天',
        likes: 234,
        comments: 45,
        isLiked: false
      },
      {
        id: 4,
        user: {
          name: '山野寻花人',
          avatar: '🧑',
          level: '植物达人'
        },
        content: '周末去爬山，在山间发现了一大片野百合，太惊喜了！这种原生的百合花比园艺品种更有野趣。用赏花仙子识别确认了，是山丹百合，也叫细叶百合。',
        images: ['🌷', '🏔️'],
        flower: '山丹百合',
        location: '西山森林公园',
        time: '2天前',
        likes: 892,
        comments: 128,
        isLiked: false
      },
      {
        id: 5,
        user: {
          name: '荷花仙子',
          avatar: '👧',
          level: '摄影爱好者'
        },
        content: '荷塘月色，荷花盛开的季节太美了！清晨去拍的，露珠还在花瓣上，晶莹剔透。大家知道这是什么品种的荷花吗？',
        images: ['🪷', '🌅'],
        flower: '荷花',
        location: '西湖',
        time: '3天前',
        likes: 1256,
        comments: 203,
        isLiked: true
      }
    ];

    this.setData({
      postList,
      hotTopics
    });
  },

  switchTab(e) {
    const tab = parseInt(e.currentTarget.dataset.tab);
    voiceUtils.vibrateShort();
    this.setData({ currentTab: tab });
  },

  toggleLike(e) {
    const id = e.currentTarget.dataset.id;
    voiceUtils.vibrateShort();
    
    const postList = this.data.postList.map(post => {
      if (post.id === id) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    });
    
    this.setData({ postList });
  },

  goToTopic(e) {
    const name = e.currentTarget.dataset.name;
    voiceUtils.vibrateShort();
    wx.showToast({
      title: `查看话题：${name}`,
      icon: 'none'
    });
  },

  goToUserProfile() {
    voiceUtils.vibrateShort();
    wx.showToast({
      title: '查看用户主页',
      icon: 'none'
    });
  },

  commentPost(e) {
    const id = e.currentTarget.dataset.id;
    voiceUtils.vibrateShort();
    wx.showToast({
      title: '评论功能开发中',
      icon: 'none'
    });
  },

  sharePost() {
    voiceUtils.vibrateShort();
  },

  publishPost() {
    voiceUtils.vibrateShort();
    wx.showActionSheet({
      itemList: ['发图文', '发视频', '识别后分享'],
      success: (res) => {
        wx.showToast({
          title: '发布功能开发中',
          icon: 'none'
        });
      }
    });
  },

  onShareAppMessage() {
    return {
      title: '赏花仙子 - 和花友一起分享花开的美好',
      path: '/pages/index/index'
    };
  }
});
