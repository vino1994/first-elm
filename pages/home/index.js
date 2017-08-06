//index.js
//获取应用实例
var amapFile = require('../../libs/amap-wx.js');
var app = getApp()
Page({
  data: {
    cityInfo:{
      address:'',
      weather:''
    },
    userInfo: {}
  },
  onLoad:function(){
    let _this=this;
    let myAmapFun = new amapFile.AMapWX({key:'c641e1196ea80382e048e679696875ac'});
    //获取地址信息
    myAmapFun.getRegeo({
      success:function(data){
        _this.setData({
            'cityInfo.address': data[0].name
        })
      },
      fail:function(info){
        _this.setData({
            'cityInfo.address': '定位失败'
        })
        console.info(info)
      }
    })
    //获取天气信息
    myAmapFun.getWeather({
      success: function(data){
         _this.setData({
            'cityInfo.weather':data.weather.data
        })
      },
      fail: function(info){
        _this.setData({
            'cityInfo.address': '定位失败'
        })
        console.log(info)
      }
    })
  },
  goMap:function(){
    wx.navigateTo({
      url:'../order/order'
    })
  }
})
