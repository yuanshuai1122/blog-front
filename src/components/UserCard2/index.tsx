import React, {useEffect} from 'react';
import {Avatar, Card} from "antd";
import Axios from "@/utils/Axios";


const { Meta } = Card;

const UserCard2 = () => {

    useEffect(()=> {

    }, [])


    return (
        <div>
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
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            
        </div>
    );
};

export default UserCard2;