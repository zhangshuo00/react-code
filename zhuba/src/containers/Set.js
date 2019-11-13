import React, { Component } from 'react'
import { NavBar,Icon,List,WhiteSpace,Button } from 'antd-mobile'
import {Link} from 'react-router-dom'

const Item = List.Item;
export default class Set extends Component {
    render() {
        return (
            <div>
                <NavBar mode="light" icon={<Link to='/home'><Icon type="left" /></Link>}>设置</NavBar>
                <List>
                    <Item
                    // thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    thumb = {<img src={require('../images/edit.png')}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    >资料修改</Item>
                    <Item
                    thumb= {<img src={require('../images/lock.png')}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    >密码修改</Item>
                </List>
                <WhiteSpace size="xl" />
                <List>
                    <Item
                    thumb={<img src={require('../images/password.png')}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    >清除缓存 <span style={{paddingLeft:'150px'}}>356M</span></Item>
                </List>
                <WhiteSpace size="xl" />
                <List>
                    <Item
                    thumb={<img src={require('../images/news.png')}/>}
                    arrow="horizontal"
                    onClick={() => {}}
                    >关于我们</Item>
                </List>
                <Button type="warning">退出登录</Button><WhiteSpace />
            </div>
        )
    }
}
