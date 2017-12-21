import { api } from '../Data/data.js';

const indexIcon = {
    theme_color:"",
    near_shop_cabinet: '/Images/index/icon_store@3x.png',
    default_avatar: '/Images/index/yonghu@3x.png',
    unfinish_order_avatar:'',
    center: '/Images/index/icon4.png',
    desktop: '/Images/index/icon_home_desk@3x.png',
    cabinet: '/Images/index/icon_home_power@3x.png',
    home_tab_all: '/Images/index/icon_all_l@2x.png',
    home_tab_all_avtive: '/Images/index/icon_all_cli@2x.png',
    home_tab_desktop: '/Images/index/icon_desk_l@2x.png',
    home_tab_desktop_active: '/Images/index/icon_desk_cli@2x.png',
    home_tab_cabinet: '/Images/index/icon_power_l@2x.png',
    home_tab_cabinet_active: '/Images/index/icon_power_cli@2x.png',
    charge_success:'',
    charging:'',
    pay_finish:'',
    help_button:'',
    map_location:'',
    scan:''
}

const timeICon = {
    timeBg:'/Images/time/'
}

function skin(callback) {
    let _this = this;
    let param = {
        API_URL:'/config/asset',
        data:{},
        method:"POST",
        token: wx.getStorageSync('token')
    };
    api.fetchApi(param).then((data)=>{
        if(data.data.code == 0){
            console.info(data.data.data)
            callback();
        }
    })
}

module.exports = {
    skin: skin
}