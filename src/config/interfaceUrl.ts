// 请求协议
const reqProtocol = window.location.protocol

// base Url
let hostUrl = reqProtocol + "//localhost:8088"

// =============== 用户相关接口地址 ==================

/**
 * @interface  userInfo 查询用户信息
 */
const userInfo = hostUrl + '/user';



export {
    userInfo
}