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
            //将选择器的选取范围更改为自定义组件component内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。）
            // const query = wx.createSelectorQuery().in(this);
            this.triggerEvent("customevent", { value: e.currentTarget.dataset.code })
        },


        //遍历emoji文件
        getEmoji: function () {
            let pathArr = [[], [], [], [], [], []];
            for (let i = 1; i < 135; i++) {
                let pa = {
                    path : '',
                    code : ''
                };
                if (i < 10) {
                    pa.path = `/libs/wxParse/emojis/0${i}.gif`;
                } else {
                    pa.path = `/libs/wxParse/emojis/${i}.gif`;
                }
                pa.code = `[em_${i}]`;
                if (0 <= i && i < 25) {
                    pathArr[0].push(pa)
                } else if (24 <= i && i < 49) {
                    pathArr[1].push(pa)
                } else if (48 <= i && i < 73) {
                    pathArr[2].push(pa)
                } else if (72 <= i && i < 97) {
                    pathArr[3].push(pa)
                } else if (96 <= i && i < 121) {
                    pathArr[4].push(pa)
                } else {
                    pathArr[5].push(pa)
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
