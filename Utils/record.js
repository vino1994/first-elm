
const app = getApp();

//将emoji转换为图片路径
// function getEmojiImg(content) {
//     //正则匹配emoji字符串
//     let patrn = /\[([\u4e00-\u9fa5\w]+)\]/g;
//     //匹配后的emoji列表
//     let entryEmojiList = content.match(patrn);
//     //输入emoji的地址
//     let entryEmojiUrl = []
//     if (!!entryEmojiList) {
//         for (let j = 0; j < entryEmojiList.length; j++) {
//             entry:
//             for (let i = 0; i < app.globalData.emoji.length; i++) {
//                 for (let k = 0; k < app.globalData.emoji[i].length; k++) {
//                     if (entryEmojiList[j] == app.globalData.emoji[i][k].code) {
//                         let img = `<img src="${app.globalData.emoji[i][k].path}" />`
//                         entryEmojiUrl.push(img)
//                         break entry;
//                     }
//                 }
//             }
//         }
//     }
//     return entryEmojiUrl;
// }

//替换input中的emoji可以显示的内容
function emojiHandle(str) {
    str = str.replace(/\</g, '&lt;');
    str = str.replace(/\>/g, '&gt;');
    str = str.replace(/\n/g, '<br/>');
    str = str.replace(/\[em_([0-9]*)\]/g, '<img src="/libs/wxParse/emojis/$01.gif" border="0" />');
    return str;
}

module.exports = {
    emojiHandle: emojiHandle
}