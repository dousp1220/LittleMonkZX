//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        debugger;
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // wx.redirectTo({
        //   url: '../welcome/welcome',
        //   success: function (res) { },
        //   fail: function (res) { },
        //   complete: function (res) { },
        // })

        // wx.redirectTo({
        //   url: '../welcome/welcome',
        //   success: function (res) { },
        //   fail: function (res) { },
        //   complete: function (res) { },
        // })
        // addprj(e.detail.value, res.code);
        this.globalData.code = res.code;
        // this.globalData.formjson = e.detail.value;
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
              debugger;
              this.globalData.userInfo = res.userInfo
              var jsonobj = {};
              jsonobj["encryptedData"] = res.encryptedData;
              jsonobj["iv"] = res.iv;
              jsonobj["code"] = this.globalData.code;
              console.log(jsonobj);
              wx.request({
                url: 'https://www.test.com:8080/account/login/',
                method: 'POST',
                data: this.json2form(jsonobj),
                header: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
                success: function (re) {
                  debugger;
                  console.log(re);
                  console.log(re.data["openId"]);
                  // re.data["prjname"] = this.globalData.formjson["prjname"];
                  // re.data["prjaddr"] = this.globalData.formjson["prjaddr"];
                  // re.data["regtime"] = new Date().getTime();
                  // wx.request({
                  //   url: 'https://test.com/proj/addprj/', //仅为示例，并非真实的接口地址
                  //   //method:'GET',
                  //   method: 'POST',
                  //   data: this.json2form(re.data),
                  //   header: {
                  //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                  //   },
                  //   success: function (res) {
                  //     var data = res.data;
                  //     debugger;
                  //   }
                  // })
                }
              })

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  json2form: function(jsonobj){
      var str= [];
      for(var p in jsonobj){
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(jsonobj[p]));
    }
    return str.join("&");
  },
  globalData: {
    userInfo: null,
    code: "",
    formjson: {},
  }
})