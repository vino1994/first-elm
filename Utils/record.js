//处理emoji
const app = getApp();

function emojiHandle(content) {
    
    console.info(content)
    console.info(app.globalData.emoji)
}




module.exports = {
    emojiHandle: emojiHandle
}