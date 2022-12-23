import Axios from "../utils/Axios";
import {userInfo} from "../config/interfaceUrl";

/**
 * 查询用户信息
 * @param param
 */
export const getUser = () => {
    return Axios.get(`${userInfo}`)
}
