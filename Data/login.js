import api from './data.js'

const login = {
    getLogin: ({ params, ...arg }) => {
        let _this = this;
        wx.login({
            success: (res) => {
                let param = {
                    API_URL: '/user/login/wechat',
                    data: {
                        code: res.code
                    },
                    method: 'POST'
                }
                api.fetchApi(param).then((data) => {
                    debugger
                    console.info(data)
                })
            }
        })
    }
}

export default login;