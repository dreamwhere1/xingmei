import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as styled from './style'
import { getAllList } from '@/store/home/actionCreates'
import { Carousel } from 'element-react/next'
import BackToTop from '@/components/backToTop'

import './home.less'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // console.log(this.props)
    let { sliderList, iconList, detailList } = this.props
    return (
      <>
        <div className="nctouch-home-top fixed-Width">
          <header id="header">
            <div className="header-wrap">
              <h1 className="logo">星美</h1>
            </div>
            <div className="header-r">
              <styled.NavLinkWrap to="/search">
                <styled.IWrap className="icon" />
              </styled.NavLinkWrap>
            </div>
          </header>
          <Carousel height="11.75rem" indicatorPosition="none">
            {sliderList.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.image}
                  alt=""
                  style={{ height: '100%', width: '100%' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="nctouch-home-nav fixed-Width">
          <ul id="J_homeNavBtn">
            {iconList.map((item, index) => (
              <li className={item.type} key={index}>
                <styled.NavLinkWrap2 to={item.url_wap}>
                  <styled.SpanWrap>
                    <styled.IWrap2
                      style={{ backgroundImage: `url(${item.icon}` }}
                    />
                  </styled.SpanWrap>
                  <styled.PWrap>{item.title}</styled.PWrap>
                </styled.NavLinkWrap2>
              </li>
            ))}
          </ul>
        </div>
        <div className="nctouch-home-layout" id="main-container2">
          {detailList.map((item, index) => (
            <div className="nctouch-home-block ui-home-block" key={index}>
              <div className="tit-bar">{item.title}</div>
              <ul className="item-pic-list">
                {item.item.map((item2, index) => (
                  <li key={index}>
                    <a href={'/#/detail/' + item2.data.match(/\d{4,}$/)}>
                      <div className="ui-home-items-pic">
                        <img src={item2.image} alt="" />
                      </div>
                      <dl className="ui-home-items-info">
                        <dt>{item2.title}</dt>
                        <dd>{item2.ftitle}</dd>
                      </dl>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <BackToTop />
      </>
    )
  }
  componentDidMount() {
    this.props.getAllList()
  }
}

export default connect(
  ({ home }) => ({
    sliderList: home.sliderList,
    iconList: home.iconList,
    detailList: home.detailList
  }),
  dispatch => ({
    getAllList: () => dispatch(getAllList())
  })
)(Home)
