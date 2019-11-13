import React, { Component } from 'react'
import { NavBar,Carousel,Flex,WhiteSpace } from 'antd-mobile'


export default class Homeproduct extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar mode="light" style={{backgroundColor:'#3fcccb'}}>住吧家居</NavBar>
                <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                        src={require('../images/home_banner_02.jpg')}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                        />
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace size="xl" />
                <Flex>
                    <Flex.Item><img style={{width:'110px'}} src={require('../images/home_hot_03.jpg')}/></Flex.Item>
                    <Flex.Item><img style={{width:'110px'}} src={require('../images/home_personal_03.jpg')}/></Flex.Item>
                    <Flex.Item><img style={{width:'110px'}} src={require('../images/home_0_08.jpg')}/></Flex.Item>
                </Flex>
                <WhiteSpace size="xl" />
                <div style={{fontSize:'20px'}}>热门推荐</div>
                <Flex>
                    <Flex.Item><img style={{width:'100%'}} src={require('../images/home_banner1_02.jpg')}/></Flex.Item>
                </Flex>
            </div>
        )
    }
}
