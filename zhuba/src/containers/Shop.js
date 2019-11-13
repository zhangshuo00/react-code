import React, { Component } from 'react'
import { NavBar,Icon,SearchBar,Carousel,Grid,WhiteSpace } from 'antd-mobile'

var name = ['桌','床','椅','几','柜','书架','沙发','家具饰品','户外家具','全部分类'];
const data = name.map((_val, i) => ({
    icon: require('../images/shop_icon_05.jpg'),
    text: name[i],
  }));
export default class Shop extends Component {
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
                <NavBar mode="light"
                 style={{backgroundColor:'#3fcccb'}}
                 rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                ]}>商城</NavBar>
                <SearchBar placeholder="Search" maxLength={8} />
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
                        src={require('../images/shop_banner_02.jpg')}
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
                <Grid data={data} hasLine={false} columnNum={5}/>
                <WhiteSpace size="xl" />
                <div style={{display:'flex',marginBottom:'10px'}}>
                    <div style={{marginLeft:'20px'}}>
                        <img style={{width:'150px'}} src={require('../images/shop_cup_03.jpg')}/>
                        <div><p>欧式风格精细</p><p>￥ 39.9</p></div>
                    </div>
                    <div style={{marginLeft:'20px'}}>
                        <img style={{width:'150px'}} src={require('../images/shop_black_03.jpg')}/>
                        <div><p>顺顺工艺欧式风格塑料外框</p><p>￥ 83.99</p></div>
                    </div>
                </div>
            </div>
        )
    }
}
