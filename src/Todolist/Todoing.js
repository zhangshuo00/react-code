import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        return (
            <div className='itemBox'>
                <h1>正在进行</h1>
                <ul>
                    {this.props.todo.map(
                        (item,idx)=><li key={idx} className='item'>
                            <input type="checkbox" defaultChecked={false} onClick={(e)=>{this.props.complete(idx,e)}}/>
                            {item}<button className='btn' onClick={()=>this.props.delTodo(idx)}>delete</button></li>
                    )}
                </ul>
            </div>
        )
    }
}
