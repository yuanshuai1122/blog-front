// 请求协议
const reqProtocol = window.location.protocol

// base Url
let hostUrl = reqProtocol + "//aabb.yuanshuai.vip"

// =============== 用户相关接口地址 ==================

/**
 * @interface  userInfo 查询用户信息
 */
const userInfo = hostUrl + '/user';

// =============== 菜单相关接口地址 ==================

/**
 * @interface  menuList 查询菜单列表
 */
const menuList = hostUrl + "/menus";


export {
    userInfo,
    menuList
}