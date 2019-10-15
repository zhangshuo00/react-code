import React, { Component } from 'react';
import Axios from 'axios'

export default class Request extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        try{
            fetch('https://api.apiopen.top/musicRankingsDetails?type=1',
            {method:'post',body:'{name:123}'})
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.result
                })
            })
        }catch(e){
            console.log(e);
        }
        
        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
        //     .then((res)=>{
        //         this.setState({
        //             data:res.data.result
        //         })
        //         console.log(res);
        //     })
    }
    render() {
        return (
            <div>
                <h1>请求接口</h1>
                <ul>
                    {
                        this.state.data.map(
                            (item,index)=>(
                                <li key={index}>
                                    <h2>{item.album_title}</h2>
                                    <p>{item.author}</p>
                                </li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        )
    }
}
