
//index.js
//const app = getApp()


const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = false
innerAudioContext.src = 'http://139.159.202.24:8888/audio/1.mp3'
innerAudioContext.onPlay(() => {
  //console.log('开始播放');  
})

Page({
  data: {
    isPlay: true,
    indicatorDots: false,
    vertical: true,
    autoplay: false,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  
  /**
   * 页面的初始数据
   */

 //音乐
  controlMusic: function () {
    if (this.data.isPlay) {
      this.setData({
        isPlay: false
      });

      innerAudioContext.pause();
      //this.audioCtx.pause();
    } else {
      this.setData({
        isPlay: true
      });
      innerAudioContext.play();
    }
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
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
    
  },
  onPageScroll: function (e) {
    console.log(e);//{scrollTop:99}
  }
})