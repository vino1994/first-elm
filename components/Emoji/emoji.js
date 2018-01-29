// components/emoji/emoji.js
const app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },

    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        show: 'none',
        emojiList: []
    },

    ready: function () {
        this.getEmoji();
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //显示表情
        _showEmoji: function () {
            this.setData({
                show: 'fixed'
            })
        },
        //隐藏表情
        _hideEmoji: function () {
            this.setData({
                show: 'none'
            })
        },
        //选择表情
        _choose: function (e) {
            //将选择器的选取范围更改为自定义组件component内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。）
            // const query = wx.createSelectorQuery().in(this);
            this.triggerEvent("customevent", { value: e.currentTarget.dataset.code })
        },


        //遍历emoji文件
        getEmoji: function () {
            let pathArr = [[], [], [], [], [], []];
            for (let i = 0; i < 135; i++) {
                let pa = {
                    path : '',
                    code : ''
                };
                pa.path = `/libs/wxParse/emojis/${i}.gif`;
                pa.code = `[em_${i}]`;
                if (0 <= i && i < 24) {
                    pathArr[0].push(pa)
                } else if (23 <= i && i < 48) {
                    pathArr[1].push(pa)
                } else if (47 <= i && i < 72) {
                    pathArr[2].push(pa)
                } else if (71 <= i && i < 96) {
                    pathArr[3].push(pa)
                } else if (95 <= i && i < 120) {
                    pathArr[4].push(pa)
                } else {
                    pathArr[5].push(pa)
                }
            }
            console.info(pathArr)
            app.globalData.emoji = pathArr;
            this.setData({
                emojiList: pathArr
            })
        },
    }
})
