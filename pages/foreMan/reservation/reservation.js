// pages/foreMan/reservation/reservation.js
// 预约量房
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foreManId: '',
    title: '免费预约工长量房',

    items: [
      { name: '1', value: '已交房', checked: 'true'},
      { name: '0', value: '未交房' },
    ],

    foreManData: {
      headerIcon: "../../../images/header.png",
      foreManName: "小李子",
      isAuthenticate: false,
      reservationCount: 10,
    },

    formData: {
      name: "",
      phone: '',
      address: "",
      houseType: 0,
      isMakeRoom: true,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foreManId: options.id
    })
    wx.setNavigationBarTitle({
      title: this.data.title,
    });
  },

  nameBlur: function(e) {
    var up = 'formData.name';
    this.setData({
      [up]: e.detail.value
    })
  },

  phoneBlur: function(e) {
    var up = 'formData.phone';
    this.setData({
      [up]: e.detail.value
    })
  },

  addressBlur: function(e) {
    var up = 'formData.address';
    this.setData({
      [up]: e.detail.value
    })
  },

  formSubmit: function(e) {
    console.log("提交");
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var isTrue = e.detail.value == 1;
    var up = 'formData.isMakeRoom';
    this.setData({
      [up]: isTrue
    })
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