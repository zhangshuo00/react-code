import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3]
        }
    }
    addItem = (msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        })
        // console.log(this.state.todo)
    }
    delItem = (a)=>{
        // this.state.todo.splice(a,1);
        //深拷贝
        //拷贝出来进行数据处理
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:this.state.todo
        })
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} delTodo={this.delItem}/>
            </div>
        )
    }
}
