import Axios from "../../utils/Axios";
import {userInfo} from "../../config/interfaceUrl";


const getUserFunc = async () => {
  return Axios.get(`${userInfo}`)
}


export {
  getUserFunc
}