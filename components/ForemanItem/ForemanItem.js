// components/ForemanItem/ForemanItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    foremanDate: {            // 属性名
      type: Object     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClicked: function () {
      var myEventDetail = { "id": this.data.foremanDate.id } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('itemClicked', myEventDetail, myEventOption)
    },
  }
})
