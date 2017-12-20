// import Promise from '../libs/es6-promise';

const SERVER = {
    base_url: 'https://m.emmars.cn',
    base_url: 'https://gr.emmars.cn',
    base_url: 'https://pre.emmars.cn',
    base_url: 'https://qa.emmars.cn',
    signKey: 'AOCAQ8AMIIBCgKCAQEAgXuz'
}

function successCallBack(response) {
    if (response.data.code == 0){

    }else{
        wx.showModal({
            showCancel:false,
            content: response.data.msg
        })
    }
}

function failCallBack(response) {
    console.info(22222222222222222)
    console.info(response)
}

const newData = {
    fetchApi: (params) => {
        let _this = this;
        return new Promise((resolve, reject) => {
            let data = {
                url: SERVER.base_url + params.API_URL,
                data: params.data,
                method: params.method,
                success: successCallBack,
                fail: failCallBack
            }

            if (params.token) {
                data.header = { 'X-WX-TOKEN': params.token };
            }
            // 微信唯一标识
            let uuid = '';
            if (wx.getStorageSync('uuid')) {
                uuid = wx.getStorageSync('uuid');
            } else {
                uuid = wx.setStorageSync('uuid', generateUUID());
            }
            data.data.wuuid = uuid;

            wx.request(data);
        })
    }
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}


export default newData;