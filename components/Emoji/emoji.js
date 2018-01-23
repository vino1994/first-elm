// components/emoji/emoji.js
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
            // console.info(e.currentTarget.dataset.id)
            //将选择器的选取范围更改为自定义组件component内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。）
            // const query = wx.createSelectorQuery().in(this);
            this.triggerEvent("customevent", { value: e.currentTarget.dataset.id })
        },
        //遍历emoji文件
        getEmoji: function () {
            let pathArr = [[], [], [], [], [], []];
            for (let i = 1; i < 135; i++) {
                let path = '';
                if (i < 10) {
                    path = `/libs/wxParse/emojis/0${i}.gif`;
                } else {
                    path = `/libs/wxParse/emojis/${i}.gif`;
                }
                if (0 <= i && i < 25) {
                    pathArr[0].push(path)
                } else if (24 <= i && i < 49) {
                    pathArr[1].push(path)
                } else if (48 <= i && i < 73) {
                    pathArr[2].push(path)
                } else if (72 <= i && i < 97) {
                    pathArr[3].push(path)
                } else if (96 <= i && i < 121) {
                    pathArr[4].push(path)
                } else {
                    pathArr[5].push(path)
                }
                // pathArr.push(path)
            }
            console.info(pathArr)
            this.setData({
                emojiList: pathArr
            })
        },
    }
})
