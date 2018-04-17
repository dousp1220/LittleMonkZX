// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: '../../images/cat.jpg'
  },

  comeIn: function() {
    wx.redirectTo({
      url: '../foreMan/foreMan/foreMan',
      success: function (res) { },
      fail: function (res) { console.log(res); },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var vm = this;
    var t = setTimeout(function () {
      //要延时执行的代码  
      vm.comeIn();
      clearTimeout(t);
    }, 1000) //延迟时间 这里是1秒 

    // setInterval(function () {
    //   //循环执行代码  
    // }, 1000) //循环时间 这里是1秒   
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