import React, { Component } from 'react'

//子组件 --> 父组件传递数据，调用子组件时往子组件传递一个函数
//子组件通过props 调用该函数

//非受控组件
// export default class Todoinput extends Component{
//     constructor(){

//     }
//     componentDidMount(){
//         console.log(this.inp.value);
//         console.log(this.refs);
//     }
//     search =()=>{
//         console.log(this.inp.value);
//     }
//     render(){
//         return (
//             <div>
//                 <input ref='a'type="text"/>
//                 {/* <input type="text" ref={(inp)=>this.inp = inp}/> */}
//                 <button onClick={this.search}>查询</button>
//             </div>
//         )
//     }
// }



//受控组件和非受控组件
//受控组件：value值被react的状态控制
//可以方便拿到input框的值，实时获取或处理输入的内容
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
            n1:0,
            n2:0 
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:parseInt(e.target.value)
        })
    }
    handleInput =(e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <input name='n1' onChange={(e)=>this.handleChange(e)} value={this.state.value} onKeyDown={this.handleInput} type="text"></input>
                +
                <input name='n2' onChange={(e)=>this.handleChange(e)} value={this.state.value} onKeyDown={this.handleInput} type="text"></input>
                <p>{this.state.n1 + this.state.n2}</p>
                <button>查询</button>
            </div>
        )
    }
}
