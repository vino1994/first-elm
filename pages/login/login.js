import utils from '../../Utils/utils.js'
// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        supportMode: ''      //设备支持的认证方式
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;
        utils.isCompatibility('checkIsSupportSoterAuthentication', function () {
            _this.checkIsSupportSoterAuthentication();
        });
    },

    //指纹支持
    checkIsSupportSoterAuthentication: function () {
        let _this = this;
        wx.checkIsSupportSoterAuthentication({
            success(res) {
                _this.setData({
                    supportMode: res.supportMode
                })
                _this.startSoterAuthentication();
            }
        })
    },

    //开始 SOTER 生物认证
    startSoterAuthentication:function(){
        let _this = this;
        wx.startSoterAuthentication({
            requestAuthModes: _this.data.supportMode,
            challenge:'123321',
            authContent: '请用指纹解锁',
            success(res){
                wx.showModal({
                    content: JSON.stringify(res)
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