// components/fiveStarScore/fiveStarScore.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {            // 属性名
      type: Number,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      // observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },

    size: {            // 属性名
      type: Number,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: [0,1,2,3,4],
    normalSrc: '../../images/normal.png',
    selectedSrc: '../../images/selected.png',
    halfSrc: '../../images/half.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击右边,半颗星
    selectLeft: function (e) {
      debugger;
      var score = e.currentTarget.dataset.score
      if (this.data.key == 0.5 && e.currentTarget.dataset.score == 0.5) {
        //只有一颗星的时候,再次点击,变为0颗
        score = 0;
      }
      console.log("得" + score + "分")
      this.setData({
        score: score
      })
    },

    //点击左边,整颗星
    selectRight: function (e) {
      var key = e.currentTarget.dataset.key
      console.log("得" + key + "分")
      this.setData({
        key: key
      })
    }
  }
})
