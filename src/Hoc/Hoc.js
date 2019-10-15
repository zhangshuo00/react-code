import React, { Component } from 'react';

let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';
function hoc(Com){
    class A extends Component{
        constructor(){
            super();
            this.state = {
                data:[]
            }
        }
        componentDidMount(){
            try{
                fetch(url,
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
        render(){
            return <Com data={this.state.data}/>
        }
    }
    return A;
}

class Music extends Component{
    render(){
        return <ul>
            {
                this.props.data.map((item,idx)=>{
                    return <li key={idx}>{item.title}</li>
                })
            }
        </ul>
    }
}
var MyMusic = hoc(Music,url);
var MyMusic1 = hoc(Music,url);

export default class Hoc extends Component {
    render() {
        return (
            <div>
                <MyMusic/>
                <MyMusic1/>
            </div>
        )
    }
}
