import { api } from '../../Data/data.js';

const app = getApp();
// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hg: '',
        isVoice: true,
        audioContent: '按住 说话'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            hg: app.globalData.system.windowHeight + 'px'
        })
    },

    /**
     * 开始触摸
     */
    touchstart: function (e) {
        console.info("开始触摸")
        console.info(e)
        this.setData({
            audioContent: '松开 结束'
        })
    },

    /**
    * 结束触摸
    */
    touchend: function (e) {
        console.info("结束触摸")
        console.info(e)
        this.setData({
            audioContent: '按住 说话'
        })
    },

    /**
    * 触摸移动
    */
    touchmove: function (e) {
        console.info("触摸移动")
        console.info(e)
    },

    //语音文字转换
    change: function () {
        this.setData({
            isVoice: this.data.isVoice ? false : true
        })
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