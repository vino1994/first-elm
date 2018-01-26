/**
 * 获取手机系统信息
 */
function getSystemInfo(callback) {
    wx.getSystemInfo({
        success: function (res) {
            callback(res);
        },
        fail: function (res) {

        }
    })
}

//获取用户信息
function login(callback) {
    wx.login({
        success: function (res) {
            wx.getUserInfo({
                withCredentials: true,
                success: function (respon) {
                    wx.setStorage({
                        key: 'userInfo',
                        data: respon.userInfo
                    })
                    callback(true);
                }
            })
        }
    })
}

module.exports = {
    getSystemInfo: getSystemInfo,
    login: login
}