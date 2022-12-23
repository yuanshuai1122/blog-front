import React from 'react';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const UserCard: React.FC = () => (

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
);

export default UserCard;