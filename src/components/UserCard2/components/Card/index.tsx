


import React, { FC } from "react";
import {Avatar, Card} from "antd";
import {userInfoType} from '../../type'

const { Meta } = Card;
interface CardUserProps {
  userInfo?: userInfoType
}
const CardUser:FC<CardUserProps> = (props) => {
  let {
    userInfo
  } = props
  console.log(userInfo);
  return <>
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title= {userInfo?.username}
        description= "没写出来，尬住了"
      />
    </Card>
  </>
}

export default CardUser