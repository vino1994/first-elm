//处理emoji
const app = getApp();

function emojiHandle(content) {
    //正则匹配emoji字符串
    let patrn = /\[([\u4e00-\u9fa5\w]+)\]/g;
    //匹配后的emoji列表
    let entryEmojiList = content.match(patrn);
    //输入emoji的地址
    let entryEmojiUrl = []
    for (let j = 0; j < entryEmojiList.length; j++) {
        entry:
        for (let i = 0; i < app.globalData.emoji.length; i++) {
            for (let k = 0; k < app.globalData.emoji[i].length;k++){
                if (entryEmojiList[j] == app.globalData.emoji[i][k].code) {
                    let img = `<image src="${app.globalData.emoji[i][k].path}"></image>`
                    entryEmojiUrl.push(img)
                    break entry;
                }
            }
        }
    }
    return entryEmojiUrl;
}


module.exports = {
    emojiHandle: emojiHandle
}