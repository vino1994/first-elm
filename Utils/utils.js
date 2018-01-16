import gs from './gs.js'
//兼容性判断
function isCompatibility(sdk, callback) {
    gs.getSystemInfo(function (res) {
        if (wx.canIUse(sdk) && res.platform != 'devtools') {
            console.info("基础版本库支持")
            callback(true);
        } else {
            wx.showModal({
                showCancel: false,
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
                success: function () {
                    callback(false);
                }
            })
        }
    })
}

module.exports = {
    isCompatibility: isCompatibility
}