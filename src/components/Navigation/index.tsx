import React, {useEffect, useState} from 'react';
import {HomeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {getMenuList} from "../../servers/menu";

const items: MenuProps['items'] = [];

const Navigation: React.FC = () => {

    const [current, setCurrent] = useState('mail');

    const [menuItems, setMenuItems] = useState(items);

    useEffect(()=> {
        getMenuList().then(res => {
            if (res.data.code === 1) {
                console.log(res.data.data)
                const menuList: { label: string; key: string; icon: JSX.Element; }[] = []
                // eslint-disable-next-line
                res.data.data.map((item: any) => {
                    menuList.push({
                        label: item.name,
                        key: item.id,
                        icon: <HomeOutlined />,
                    })
                })
                setMenuItems(menuList)
            }
        })
    },[])

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems} />;
};

export default Navigation;