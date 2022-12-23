import React, {useEffect} from 'react';
import {Avatar, Card} from "antd";
import {getUser} from "../../servers/user";



const { Meta } = Card;

const UserCard2 = () => {

    // const [user, setUser] = useState();

    useEffect(()=> {
        getUser().then((res: any) => {
            if (res.data.code === 1) {
                console.log(res.data)
                //setUser(res.data)
            }
        })
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
                    title= "title"
                    description= "没写出来，尬住了"
                />
            </Card>
            
        </div>
    );
};

export default UserCard2;