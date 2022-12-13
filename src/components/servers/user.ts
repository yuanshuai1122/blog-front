/**
 * 查询用户信息
 * @param param
 */
import Axios from "@/utils/Axios";
import {userInfo} from "@/config/interfaceUrl";

export const getUsers = () => {
    return Axios.get(`${userInfo}`)
}