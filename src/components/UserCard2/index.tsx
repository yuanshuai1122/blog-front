import React, {useEffect, useState} from 'react';
import CardUser from "./components/Card";
import { getUserFunc } from "./servers";
import {userInfoType} from './type'


const UserCard2 = () => {
    const [userInfo, setUserInfo] = useState<userInfoType>({})
    useEffect(()=>{
      getUserFunc().then(res=>{
        setUserInfo(res.data)
      })
    },[])
    return (
        <div>
          <CardUser userInfo={userInfo}/>
        </div>
    );
};

export default UserCard2;