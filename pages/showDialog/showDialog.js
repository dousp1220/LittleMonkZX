// pages/showDialog/showDialog.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    
    this.dialog = this.selectComponent("#dialog");
  },
  showDialog:function() {
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent: function() {
    console.log('你点击了取消');
    wx.showToast({
      title: '你点击了取消',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent: function ()  {
    wx.showToast({
      title: '你点击了确定',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  }
})