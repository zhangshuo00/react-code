import React, { Component } from 'react'
import { NavBar,Tabs,Flex,WhiteSpace,Icon } from 'antd-mobile'
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' }
];
export default class Inspiration extends Component {
    render() {
        return (
            <div>
                <NavBar mode="light" style={{backgroundColor:'#3fcccb'}}rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                ]}>灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarUnderlineStyle={{border:'2px solid #ffdb2c'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/linggan1.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/linggan_head_03.jpg')}/>
                                    橙色律动
                                    <img style={{width:'15px',float:'right'}} src={require('../images/linggan_love_06.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/linggan1.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/linggan_head_03.jpg')}/>
                                    橙色律动
                                    <img style={{width:'15px',float:'right'}} src={require('../images/linggan_love_06.jpg')}/></div>
                            </div>
                        </div>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/linggan1.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/linggan_head_03.jpg')}/>
                                    橙色律动
                                    <img style={{width:'15px',float:'right'}} src={require('../images/linggan_love_06.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/linggan1.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/linggan_head_03.jpg')}/>
                                    橙色律动
                                    <img style={{width:'15px',float:'right'}} src={require('../images/linggan_love_06.jpg')}/></div>
                            </div>
                        </div>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/linggan1.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/linggan_head_03.jpg')}/>
                                    橙色律动
                                    <img style={{width:'15px',float:'right'}} src={require('../images/linggan_love_06.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/linggan1.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/linggan_head_03.jpg')}/>
                                    橙色律动
                                    <img style={{width:'15px',float:'right'}} src={require('../images/linggan_love_06.jpg')}/></div>
                            </div>
                        </div>


                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        冬季
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        宜家
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        小清新
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        小户型
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        个性色彩
                    </div>
                </Tabs>
            </div>
        )
    }
}
