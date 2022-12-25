import Axios from "../utils/Axios";
import {menuList} from "../config/interfaceUrl";

/**
 * 查询菜单列表
 */
export const getMenuList = () => {
    return Axios.get(`${menuList}`)
}