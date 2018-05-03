// pages/foreman/foreMan.js
var tcity = require("../../../utils/citys.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    foreManId: "",
    foreManName: "",
    foreManData: {
      "headerIcon": "../../../images/header.png",
      "origin" : "陕西",
      "reservationCount" : 10,//工龄
      "workerCount" : 10, //工人数
      "reservationCount" : 10, //预约数
      "scoreCount" : 110,//评价数
      "score" : 5,//评分
      "goodScoreScale": 99, //好评率
      "specialty" : "砌砖，木工",//特长--多个逗号分割
    },
    examples: [
      {
        "id": 20001,
        "imageUrl": '/images/cat.jpg',
        "detailMag": '87平米北欧和现代的结合'
      },
      {
        "id": 20002,
        "imageUrl": '/images/cat.jpg',
        "detailMag": '87平米北欧和现代的结合'
      }
    ],
    evaluationDatas: {
      "quality": "4.8",
      "accuracy" : "4.7",
      "evaluationList": [
        {

        },
        {
          
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foreManId: options.id,
      foreManName: options.name
    })
    wx.setNavigationBarTitle({
      title: this.data.foreManName,
    });
  },

  sreach: function () {
    this.setData({
      toastText: this.data.searchValue,
      toastHidden: false
    });  
  },

  //案例点击
  exampleItemClickedSlot: function(e) {
    var fremanId = e.detail.id;
    console.log("exampleId", fremanId);
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