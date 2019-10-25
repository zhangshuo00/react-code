import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        return (
            <div className='itemBox'>
                <h1>正在进行<span style={{marginLeft:'400px',fontSize:'20px',borderRadius:'50px',color:'#666',backgroundColor:'white',width:'40px'}}>{this.props.todo.length}</span></h1>
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
