// pages/foreMan/allScore/allScore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foreManId: "",

    evaluationDatas: {
      "quality": "4.8",
      "accuracy": "4.7",
      "scoreTags": [
        "质量好（100）",
        "666(666)",
        "啦啦啦啦啦啦"
      ],
      "evaluationList": [
        {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人都很满意，哈哈哈，库造型那",
          "scoreImages": ["/images/cat.jpg", "/images/cat.jpg", "/images/cat.jpg", "/images/cat.jpg"]
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人cdc都很满意，哈哈哈",
          "scoreImages": ["/images/cat.jpg"]
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人c都xsxsa很满意，哈哈哈",
          "scoreImages": ["/images/cat.jpg", "/images/cat.jpg"]
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人都sdfsda很满意，哈哈哈",
          "scoreImages": ["/images/cat.jpg", "/images/cat.jpg", "/images/cat.jpg", "/images/cat.jpg", "/images/cat.jpg", "/images/cat.jpg"]
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人fsdfsad都很满意，哈哈哈"
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开sdafds心，全家人都很满意，哈哈哈"
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开fsdfs心开心，全家人都很满意，哈哈哈"
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装fsda完了，开心开心，全家人都很满意，哈哈哈"
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人都很满意，哈哈哈"
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人都很满意，哈哈哈"
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人都很满意，哈哈哈"
        }, {
          "headerUrl": "../../images/header.png",
          "phone": "135****4444",
          "score": "5.0",
          "scoreText": "好评",
          "data": "2018-05-05",
          "scoreMainText": "我家已经装完了，开心开心，全家人都很满意，哈哈哈"
        }
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foreManId: options.id
    });
    wx.setNavigationBarTitle({
      title: "全部评价",
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})