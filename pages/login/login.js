import utils from '../../Utils/utils.js'
const app = getApp();
// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hg:'',
        isSupportBiology: true,
        supportMode: ''      //设备支持的认证方式
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;
        utils.isCompatibility('checkIsSupportSoterAuthentication', function (res) {
            if (res) {
                _this.checkIsSupportSoterAuthentication();
            } else {
                _this.initLogin();
            }
        });
    },

    //初始化form表单页面
    initLogin: function () {
        this.setData({
            isSupportBiology: false,
            hg: app.globalData.system.windowHeight + 'px'
        })
    },

    //登录
    login: function (e) {
        let _this = this;
        if (e.detail.value.name == '123123' && e.detail.value.pwd == '123123') {
            wx.showToast({
                title: '登录成功',
                icon: 'success',
                mask: true,
                duration: 2000
            })
            setTimeout(() => {
                wx.redirectTo({
                    url: '../index/index',
                })
            }, 2100)
        } else {
            wx.showModal({
                content: '账号或密码错误',
                showCancel: false
            })
        }
    },

    //指纹是否支持
    checkIsSupportSoterAuthentication: function () {
        let _this = this;
        wx.checkIsSupportSoterAuthentication({
            success(res) {
                _this.setData({
                    supportMode: res.supportMode
                })
                wx.checkIsSoterEnrolledInDevice({
                    checkAuthMode: _this.data.supportMode[0],
                    success(param) {
                        if (param.isEnrolled) {
                            _this.startSoterAuthentication();
                        } else {
                            wx.showModal({
                                content: '暂未录入指纹',
                                showCancel: false,
                                success:function(){
                                    _this.initLogin();
                                }
                            })
                        }
                    }
                })
            }
        })
    },

    //开始 SOTER 生物认证
    startSoterAuthentication: function () {
        let _this = this;
        wx.startSoterAuthentication({
            requestAuthModes: _this.data.supportMode,
            challenge: '123321',
            authContent: '请用指纹解锁',
            success(res) {
                wx.redirectTo({
                    url: '../index/index',
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