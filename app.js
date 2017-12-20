import gs from 'Utils/gs.js';

App({
    onLaunch: function (options) {
        let _this = this;
        gs.getSystemInfo(function(res){
            _this.globalData.system = res;
        });
    },
    globalData: {
        system: ''
    }
})