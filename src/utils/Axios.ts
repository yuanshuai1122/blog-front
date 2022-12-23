import axios from "axios";
import {ResultBean} from "../types/resultBean";


// axios跨域配置，支持跨域携带cookie
axios.defaults.withCredentials = true

const Axios = axios.create({
    headers: {
    }

});



//定义统一错误返回集
let result: ResultBean = {
    data: '',
    error: 'statusError',
    message: '服务器繁忙',
    success: false,
}

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // eslint-disable-next-line eqeqeq
    if (config.method == 'post') {
        // 这里可能需要 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'

    }
    return config;
}, function (error) {
    return Promise.reject(result);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    return Promise.reject(result);
});

export default Axios;
