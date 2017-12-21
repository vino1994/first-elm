import Promise from '../libs/es6-promise';

const SERVER = {
    // base_url: 'https://m.emmars.cn',
    // base_url: 'https://gr.emmars.cn',
    base_url: 'https://pre.emmars.cn',
    // base_url: 'https://qa.emmars.cn',
    signKey: 'AOCAQ8AMIIBCgKCAQEAgXuz'
}

const api = {
    fetchApi: function (params) {
        let _this = this;
        wx.showLoading({
            title: '加载中...',
            mask: true
        })
        return new Promise((resolve, reject) => {
            let data = {
                url: SERVER.base_url + params.API_URL,
                data: params.data,
                method: params.method,
                success: function (response) {
                    if (response.data.code == '1403') {
                        _this.getLogin(params)
                    } else {
                        wx.hideLoading();
                        resolve(response)
                    }
                },
                fail: function (response) {
                    wx.hideLoading();
                    wx.showModal({
                        showCancel: false,
                        content: '小怪兽去迷路咯~',
                    })
                }
            }

            if (params.token) {
                data.header = { 'X-WX-TOKEN': params.token };
            }
            // 微信唯一标识
            let uuid = '';
            if (wx.getStorageSync('uuid')) {
                uuid = wx.getStorageSync('uuid');
            } else {
                uuid = wx.setStorageSync('uuid', generateUUID());
            }
            data.data.wuuid = uuid;

            wx.request(data);
        })
    },

    getLogin: function (params, ...arg) {
        let _this = this;
        wx.login({
            success: (res) => {
                let param = {
                    API_URL: '/user/login/wechat',
                    data: {
                        code: res.code
                    },
                    method: 'POST'
                }
                api.fetchApi(param).then((data) => {
                    if (data.data.code == 0) {
                        wx.setStorageSync('token', data.data.data.token);
                        wx.setStorageSync('user_id', data.data.data.user_id);
                        wx.setStorageSync('openid', data.data.data.openid);
                        wx.setStorageSync('mobile', data.data.data.mobile);
                        if (params) {
                            params(...arg)
                        }
                    }
                    if (data.data.code == '1403') {
                        _this.getLogin(params, arg)
                    }
                }).then(() => {
                    wx.showModal({
                        showCancel: false,
                        content: wx.getStorageSync('mobile')
                    })
                })
            }
        })
    }
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export { api };