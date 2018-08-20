//app.js
// var util = require("utils/util.js");

import util from 'utils/util.js'
// var Promise = require('../../../plugin/promise.js')

App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    var vm = this;

    // 登录
    wx.login({
        success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            vm.globalData.code = res.code;
        }
    })
    // 获取用户信息
    wx.getSetting({
        success: res => {
            if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
                success: res => {
                // 可以将 res 发送给后台解码出 unionId
                // debugger;
                vm.globalData.userInfo = res.userInfo
                var jsonobj = {};
                jsonobj["encryptedData"] = res.encryptedData;
                jsonobj["iv"] = res.iv;
                jsonobj["code"] = this.globalData.code;

                util.post('/account/login', jsonobj, function(res) {
                    try {
                        //保存token信息
                        wx.setStorageSync('token', res.data["token"]);
                    } catch (e) {
                    }
                }, function(res) {
                }, function(res) {
                });

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (vm.userInfoReadyCallback) {
                    vm.userInfoReadyCallback(res)
                }
                }
            })
            }
        }
    })
  },
    
  globalData: {
    userInfo: null,
    code: "",
    formjson: {},
    token: ""
  }
})