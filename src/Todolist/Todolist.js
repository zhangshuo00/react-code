import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import Done from './Done';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[],
            done:[]
        }
    }
    //页面刷新后将localstorage添加到对应ul中
    componentWillMount(){
        var todo = JSON.parse(localStorage.getItem('todo'));
        var done = JSON.parse(localStorage.getItem('done'));
        this.setState({
            todo:todo,
            done:done
        })
    }
    componentDidUpdate(){
        localStorage.setItem('todo',JSON.stringify(this.state.todo));
        localStorage.setItem('done',JSON.stringify(this.state.done));
    }
    //添加待办事项，并存入localstorage
    addItem = (msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        })
        var todo = [...this.state.todo,msg];
        localStorage.setItem("todo",JSON.stringify(todo));
    }
    //删除待办事项
    delItem = (idx)=>{
        var todo = this.state.todo;
        todo.splice(idx,1);
        this.setState({
            todo:todo
        })
    }
    //删除已完成事项
    delDoneItem = (idx)=>{
        var done = this.state.done;
        done.splice(idx,1);
        this.setState({
            done:done
        })
    }
    //完成待办事项
    completeItem=(idx,e)=>{
        var todo = this.state.todo;
        var done = [...this.state.done,todo[idx]];
        
        todo.splice(idx,1);
        this.setState({
            todo:todo,
            done:done
        })
        e.target.checked = false;
        // console.log(todo);
    }
    //取消完成待办事项
    cancleComplete=(idx,e)=>{
        var done = this.state.done;
        var todo = [...this.state.todo,done[idx]];
        done.splice(idx,1);
        this.setState({
            todo:todo,
            done:done
        })
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} complete={this.completeItem} delTodo={this.delItem}/>
                <Done done={this.state.done} delDone={this.delDoneItem} cancleComplete={this.cancleComplete}/>
            </div>
        )
    }
}
