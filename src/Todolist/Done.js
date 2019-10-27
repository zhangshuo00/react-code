import React, { Component } from 'react'

export default class Done extends Component {
    render() {
        return (
            <div className='itemBox'>
                <h1>已经完成<span style={{marginLeft:'400px',fontSize:'20px',borderRadius:'50px',color:'#666',backgroundColor:'white',width:'40px'}}>{this.props.done.length}</span></h1>
                <ul>
                    {this.props.done.map(
                        (item,idx)=><li key={idx} className='item'>
                            <input type="checkbox" checked onClick={(e)=>{this.props.cancleComplete(idx,e)}}/>
                            {item}<button className='btn' onClick={()=>this.props.delDone(idx)}>delete</button></li>
                    )}
                </ul>
            </div>
        )
    }
}
