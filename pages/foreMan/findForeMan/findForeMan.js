// pages/foreman/foreMan.js
var tcity = require("../../../utils/citys.js");
import util from '../../../utils/util.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        provinces: [],
        province: "",
        citys: [],
        city: "",
        // countys: [],
        // county: '',
        value: [0, 0, 0],
        values: [0, 0, 0],
        condition: false,

        foreManDatas: [{
        "headerIcon": "../../images/header.png",
        "name": "小李子",
        "score": 5,
        "scoreCount": 110,
        "reservationCount": 10,
        "workTime": 10,
        "specialty": "防水，立管",
        "id": "100001",
        "isAuth": true
        }, {
        "headerIcon": "../../images/header.png",
        "name": "豆子",
        "score": 4,
        "scoreCount": 110,
        "reservationCount": 10,
        "workTime": 10,
        "specialty": "找平，砌砖",
        "id": "100002",
        "isAuth": false
        }],  //数组

        searchValue: "",
        currentCity: "西安",

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

        var that = this;

        tcity.init(that);
        var cityData = that.data.cityData;
        const provinces = [];
        const citys = [];
        const countys = [];

        for (let i = 0; i < cityData.length; i++) {
        provinces.push(cityData[i].name);
        }
        console.log('省份完成');
        for (let i = 0; i < cityData[0].sub.length; i++) {
        citys.push(cityData[0].sub[i].name)
        }
        // console.log('city完成');
        // for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
        //   countys.push(cityData[0].sub[0].sub[i].name)
        // }

        that.setData({
        'provinces': provinces,
        'citys': citys,
        // 'countys': countys,
        'province': cityData[0].name,
        'city': cityData[0].sub[0].name,
        // 'county': cityData[0].sub[0].sub[0].name,
        })
        console.log('初始化完成');

        // util.get('/account/hello');
    },

    sreach: function () {
        this.setData({
        toastText: this.data.searchValue,
        toastHidden: false
        });
    },
    //综合排序
    complexClicked: function() {
    },
    //服务次数排序
    frequencyClicked: function () {
    },
    //口碑排序
    PraiseClicked: function () {
    },
    //切换城市
    citySwitch: function() {
        this.setData({
        condition: !this.data.condition
        })
    },
    closeCitySwitch: function() {
        this.setData({
        condition: false
        })
    },
    // 工长点击
    fremanItemClick: function(e) {   
        var fremanId = e.detail.id;
        var fremanName = e.detail.name;
        console.log("id", fremanId);
        var url = '../foreMan/foreMan?id=' + fremanId + '&name=' + fremanName;
        wx.navigateTo({
        url: url,
        })
    },
    //我的
    myClicked: function(e) {
        wx.request({
        url: 'https://www.test.com:8080/hello1', //仅为示例，并非真实的接口地址
        data: {
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            console.log(res.data)
        }
        })
    },
    //省市联动
    bindChange: function (e) {
        //console.log(e);
        var val = e.detail.value
        var t = this.data.values;
        var cityData = this.data.cityData;

        if (val[0] != t[0]) {
        console.log('province no ');
        const citys = [];
        // const countys = [];

        for (let i = 0; i < cityData[val[0]].sub.length; i++) {
            citys.push(cityData[val[0]].sub[i].name)
        }
        // for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        //   countys.push(cityData[val[0]].sub[0].sub[i].name)
        // }

        this.setData({
            province: this.data.provinces[val[0]],
            city: cityData[val[0]].sub[0].name,
            citys: citys,
            // county: cityData[val[0]].sub[0].sub[0].name,
            // countys: countys,
            values: val,
            value: [val[0], 0, 0]
        })

        return;
        }
        if (val[1] != t[1]) {
        console.log('city no');
        const countys = [];

        for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
            countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
        }

        this.setData({
            city: this.data.citys[val[1]],
            county: cityData[val[0]].sub[val[1]].sub[0].name,
            countys: countys,
            values: val,
            value: [val[0], val[1], 0]
        })
        return;
        }
        if (val[2] != t[2]) {
        console.log('county no');
        this.setData({
            county: this.data.countys[val[2]],
            values: val
        })
        return;
        }
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