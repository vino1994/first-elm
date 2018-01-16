import gs from './gs.js'
//兼容性判断
function isCompatibility(sdk,callback) {
    gs.getSystemInfo(function (res) {
        if (wx.canIUse(sdk)) {
            console.info("基础版本库支持")
            callback();
        } else {
            wx.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            })
        }
    })
}

module.exports = {
    isCompatibility: isCompatibility
}