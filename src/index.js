import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ShowTime} from './node_one';//引入外部文件
import Todolist from './Todolist/Todolist';
import Request from './Request'

// ReactDOM.render(<Todolist/>,document.getElementById('root'));
ReactDOM.render(<Request/>,document.getElementById('root'));


// ReactDOM.render(<ShowTime word='react'/>,document.getElementById('root'));
//组件交互
//父组件 -> 子组件：调用时在子组件上添加属性
//在子组件中通过props 获取数据

/*
console.log();
var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello',
    React.createElement(
        'h1',
        {'id':'h'},
        'react'
    )
);
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: ['hello',{
            type: 'h1',
            props: {
                id: 'h',
                class: 'h',
                children: ['react']
            }
        }]
    }
}
*/
// 加载html文件，浏览器解析html生成DOM树
// link加载css文件，解析css规则，生成render tree（渲染树），浏览器渲染引擎渲染render tree

//页面回流（重排）页面内容、结构改变
//页面重绘（把字体颜色等样式改变）


// node.offsetLeft/node.offsetWidth等慎用


// var root = document.getElementById('root');
// var width = root.offsetWidth;
// setInterval(function(){
//     width += 1;
//     root.style.width = width  + 'px';
// },100)

// display/width/height/font-size 等会引起页面回流
// document.body.style.width = '10px';
// document.body.style.height='10px';
// 声明一个css的类
// .change{
//     width:100px;
//     height:10px;
// }
// document.body.className = 'change';

/*
function render(obj,container){
    var {type,props} = obj;
    //文档碎片
    var fragment = document.createDocumentFragment();
    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i] === 'object'){
                    render(props[item][i],ele);
                }else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }


    fragment.appendChild(ele);
    container.appendChild(fragment);
}
render(obj,document.getElementById('root'));

*/
//react创建元素后不可变
// function tick(){
//     const ele = <div>{new Date().toLocaleTimeString()}</div>;
//     ReactDOM.render(ele,document.getElementById('root'));
// }
// setInterval(tick,1000);

//函数定义组件（无生命周期）
// function Hello(props){
//     return <h1>Hello{props.name}</h1>
// }
// ReactDOM.render(<Hello name='React'/>,document.getElementById('root'));
// function Todo(props){
//     return (
//         <div>
//             {/*条件渲染 */}
//             {props.list.length>=6 ? <h1>todo</h1>:''}
//             {/* <h1>todo</h1> */}
//             <ul>
//                 {/*循环渲染*/}
//                 {
//                     props.list.map(function(item,index){
//                         if(index%2 === 0)
//                             return <li key={item}>{item}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = [1,2,3,4];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
