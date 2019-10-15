import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';


//类定义组件
class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'React',
            time: new Date().toLocaleTimeString()
        }
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1);
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        },1000);
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        // console.log('getsnapshot');
    }
    componentDidUpdate(){
        // console.log('didupdate');
    }
    handleClick=(num,e)=>{
        console.log(num,e);
    }
    render(){
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        },1000)

        return(
            <Fragment>
                <div onClick={this.handleClick}>Hello,world{this.state.time}</div>{/**绑定函数 */}
                <div onClick={(e)=>this.handleClick(212,e)}>212</div>
                {/* <div onClick={this.handleClick.bind(this,num)}>11223</div> */}

            </Fragment>
        )
    }
}
// ReactDOM.render(<ShowTime word='react'/>,document.getElementById('root'));

//默认导出，只能导出一次
// export default ShowTime;
//命名导出
export{ShowTime};
