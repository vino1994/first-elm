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

module.exports = {
    getSystemInfo: getSystemInfo
}