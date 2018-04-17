// components/navigatorView/navigatorView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    url: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    // 弹窗内容
    icon: {
      type: String,
      value: ''
    },
    // 弹窗取消按钮文字
    text: {
      type: String,
      value: '跳转'
    },
    openType: {
      type: String,
      value: 'navigate'
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

  }
})
