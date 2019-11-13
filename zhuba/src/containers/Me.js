import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar,Icon,Card,List,Grid,WhiteSpace } from 'antd-mobile'
const Item = List.Item;

const data1 = Array.from(new Array(3)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
  const data2 = Array.from(new Array(6)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
export default class Me extends Component {
    render() {
        return (
            <div>
                <NavBar mode="light"
                 style={{backgroundColor:'#3fcccb'}}
                 rightContent={[
                    <Link to='/set'><Icon key="0" type="search" style={{ marginRight: '16px' }} /></Link>
                ]}>我的</NavBar>
                <div><img style={{height:'280px'}} src={require('../images/my_banner.jpg')}/></div>
                <Card full>
                <Card.Header
                    title="Markeloff /A/"
                    thumb={<img style={{borderRadius:'50px',width:'50px'}} src={require('../images/my_head_05.jpg')}/>}
                    extra={<span style={{fontSize:'10px'}}>这个人很懒什么也没有留下</span>}
                />
                </Card>
                <List>
                    <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    arrow="horizontal"
                    onClick={() => {}}
                    >我的订单 <span style={{paddingLeft:'100px'}}>查看全部订单</span></Item>
                </List>
                <Grid data={data1} columnNum={3} />
                <WhiteSpace size="xl" />
                <Grid data={data2} columnNum={3} />
            </div>
            
        )
    }
}
