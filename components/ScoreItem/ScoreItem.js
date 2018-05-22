// components/ScoreItem/ScoreItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scoreItemData: {
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
    previewlmg: function (e) {
      var imageIdx = e.currentTarget.dataset.imgIdx;

      wx.previewImage({
        current: this.data.scoreItemData.scoreImages[imageIdx],
        urls: this.data.scoreItemData.scoreImages,
      });

    },
  }
})
