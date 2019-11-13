import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <img style={{width:'40px',height:'40px'}} src={require('../images/arrow-lift.png')}/>
                    <span style={{marginLeft:'130px'}}>登录</span>
                </div>
                <ul style={{marginTop:'150px',marginLeft:'50px'}}>
                    <li><img className='login_ico' src={require('../images/account.png')}/><input className='login_input' placeholder='手机/邮箱'/></li>
                    <li><img className='login_ico' src={require('../images/password.png')}/><input className='login_input' placeholder='密码'/></li>
                    <button className='login_btn'><Link to='/home'>登录</Link></button>
                    <li style={{paddingTop:'30px',color:'#3fcccb'}}>新用户注册 | 忘记密码？</li>
                </ul>
                <div>
                    <p style={{textAlign:'center'}}>第三方登录</p>
                    <ul style={{float:'left',marginLeft:'50px'}}><li><img className='login_ico' src={require('../images/qq-fill.png')}/></li><li>QQ</li></ul>
                    <ul style={{float:'left'}}><li><img className='login_ico' src={require('../images/weibo-line.png')}/></li><li>微博</li></ul>
                    <ul style={{float:'left'}}><li><img className='login_ico' src={require('../images/wechat-fill.png')}/></li><li>微信</li></ul>
                </div>
            </div>
        )
    }
}
