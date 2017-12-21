import { api } from '../../Data/data.js';
import utilsSkin from '../../Utils/skin.js';

const app = getApp();
// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mapHeight: '',//地图高度
        isChecked: 1,//当前tabs选中位置
        leftAnimation: 0,//tabs底部色块
        poiType: 0, //tabs选中时的poi值
        longitude: '121.47',//经度
        latitude: '31.23'//纬度
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;
        this.setData({
            mapHeight: app.globalData.system.windowHeight - 46
        })
        utilsSkin.skin(function(){
            _this.getUserInfo();
        })
    },

    /**
     * *获取用户信息
     * @return {[type]} [description]
     */
    getUserInfo: function () {
        let _this = this;
        let param = {
            API_URL: '/user/info',
            data: {},
            method: 'POST',
            token: wx.getStorageSync('token')
        }
        api.fetchApi(param).then((data) => {

        })
    },



    /** 
     * 切换tabs
     */
    changeTabs: function (e) {
        this.setData({
            isChecked: e.target.dataset.num,
            leftAnimation: e.target.dataset.num - 1,
            poiType: e.target.dataset.type
        })
    },

    /**
     * 打开搜索地图
     */
    getLocation: function () {
        let _this = this;
        wx.getLocation({
            type: 'gcj02',
            success: function (res) {
                let latitude = res.latitude
                let longitude = res.longitude
                wx.chooseLocation({
                    success: function (response) {
                        _this.setData({
                            latitude: response.latitude,
                            longitude: response.longitude
                        })
                    }
                })
            }
        })
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