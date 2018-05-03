// components/exampleItem/exampleItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    exampleData: {
      type: Object
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
      var myEventDetail = {
        "id": this.data.exampleData.id,
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('exampleItemClicked', myEventDetail, myEventOption)
    },
  }
})
