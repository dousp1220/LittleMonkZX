// pages/foreman/foreMan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: "",

    toastHidden: true,
    toastText: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '找工长',
    });
  },

  sreach: function () {
    this.setData({
      toastText: this.data.searchValue,
      toastHidden: false
    });
  },

  onToastChanged: function() {
    this.setData({ toastHidden: !this.data.toastHidden });
  },

  sreachInput: function(e) {
    this.data.searchValue = e.detail.value;

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