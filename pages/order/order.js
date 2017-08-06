// pages/order/order.js
var amapFile = require('../../libs/amap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'',
    latitude:'',
    //地图标记点
    markers:[],
    //屏幕中心点位置
    controls:[{
      position:{
        left:null,
        top:null,
        width:30,
        height:30
      },
      iconPath:'/images/map.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    let myAmapFun = new amapFile.AMapWX({key:'c641e1196ea80382e048e679696875ac'});
    //高德地图
    myAmapFun.getRegeo({
      success:function(data){
          _this.setData({
            latitude : data[0].latitude,
            longitude : data[0].longitude,
            // markers:[{
            //   latitude : data[0].latitude,
            //   longitude : data[0].longitude,
            //   title:data[0].name
            // }]
          })
      }
    })
    this.mapCtx = wx.createMapContext('map');
    this.getSystemInfo();
    //腾讯地图
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function(res) {
    //     console.info(res)
    //     _this.setData({
    //     latitude : res.latitude,
    //     longitude : res.longitude,
    //     markers : [{
    //        latitude : res.latitude,
    //        longitude : res.longitude
    //     }]
    //     })
    //   }
    // })
  },
  //根据手机屏幕确定中心点位置
  getSystemInfo(){
    let _this=this;
    wx.getSystemInfo({
      success:function(res){
        _this.setData({
          'controls[0].position.left':res.windowWidth/2,
          'controls[0].position.top':(res.windowHeight-44)/2
        })
        console.info(res)
      }
    })
  },
  scanCode(){
    wx.scanCode({
      success:function(res){
        console.info(res)
      }
    })
  },
  //定位所处坐标
  localtionAddr(){
    // let _this=this;
    // wx.getLocation({
    //   type: 'gcj02',
    //   success: function(res) {
    //     console.info(res)
    //     _this.setData({
    //       latitude : res.latitude,
    //       longitude : res.longitude,
    //       markers : [{
    //         latitude : res.latitude,
    //         longitude : res.longitude,
    //         title:''
    //       }]
    //     })
    //   }
    // })
    this.mapCtx.moveToLocation()
  },
  regionchange(e) {
    console.log(e)
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