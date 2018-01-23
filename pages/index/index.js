import { api } from '../../Data/data.js';

const app = getApp();
// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hg: '',
        isVoice: true,  //是否语音
        audioContent: '按住 说话',
        focus: false,    //是否打开原生键盘
        isEmoji: false,    //是否打开表情
        value: ''
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
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.emoji = this.selectComponent("#emoji");
        console.info(this.emoji)
        // this.dialog = this.selectComponent("#dialog");
        // console.info(this.dialog)
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

    //设置input的value
    changeValue: function (e) {
        this.setData({
            value: this.data.value + e.detail.value
        })
    },








    //语音切换文字
    changeVoice: function () {
        this.setData({
            isVoice: true,
            focus: false
        })
        this.emoji._hideEmoji();
    },

    //文字切换语音
    changeWord: function () {
        this.setData({
            isVoice: false,
            focus: true
        })
        this.emoji._hideEmoji();
    },

    //发送表情
    showEmoji: function () {
        this.setData({
            isVoice: false,
            isEmoji: this.data.isEmoji ? false : true,
            focus: false
        })
        if (this.data.isEmoji) {
            this.emoji._showEmoji();
        } else {
            this.emoji._hideEmoji();
        }
    },




    showDialog() {
        this.dialog.showDialog();
    },
    //取消事件
    _cancelEvent() {
        console.log('你点击了取消');
        this.dialog.hideDialog();
    },
    //确认事件
    _confirmEvent() {
        console.log('你点击了确定');
        this.dialog.hideDialog();
    }
})