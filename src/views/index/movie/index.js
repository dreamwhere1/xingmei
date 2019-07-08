/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react'
import { FilmWrap } from './style'
import { Tabs } from 'antd'
import { connect } from 'react-redux'
import * as actions from '@/store/movie/actionCreates'
const { TabPane } = Tabs
class Film extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    function callback(key) {
      console.log(key)
    }

    return (
      <FilmWrap>
        <header className="head">
          <div className="left">
            <a href="javascript:;">深圳</a>
          </div>
          <div className="right">
            <a href="javascript:;">影院</a>
          </div>
        </header>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="正在热映" key="1">
            <ul className="film-list">
              {this.props.list.map((item, index) => (
                <li
                  className="film-item"
                  key={index}
                  style={{ overflow: 'hidden', marginBottom: '1rem' }}
                >
                  <div className="p-left">
                    <img src={item.poster} alt="" style={{ width: '100%' }} />
                  </div>
                  <div className="p-middle">
                    <div className="moviename ng-binding">蜘蛛侠：英雄远征</div>
                    <div className="explain ng-binding">
                      故 事全面延续复联4，..
                    </div>
                    <div className="assess parent_score">
                      <div className="fl score ng-binding">8.5</div>
                    </div>
                  </div>
                  <div className="p-right">
                    <a nav-direction="forward" href="javascript:;">
                      <span ng-if="item.pre_sale==0">购买</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </TabPane>
          <TabPane tab="即将上映" key="2">
            <ul className="film-list content">
              <li>
                <div className="p-left">
                  <img
                    src="http://img2.ixingmei.com/uploads/allimg/190528/1858202-1Z52QG1250-L_n.jpg?imageView2/2/w/68/h/102"
                    alt=""
                  />
                </div>
                <div className="p-middle">
                  <div className="moviename ng-binding">八佰</div>
                  <div className="explain ng-binding">
                    淞 沪会战末期，国军西撤，..
                  </div>
                  <div className="assess parent_score">
                    <div data-score="8.5" className="fl stars" />
                    <div className="fl score ng-binding">8.5</div>
                  </div>
                </div>
              </li>
            </ul>
          </TabPane>
        </Tabs>
      </FilmWrap>
    )
  }

  componentDidMount() {
    this.props.handleGetFilmList()
  }
}
export default connect(
  ({ movie }) => ({
    list: movie.list
  }),
  dispatch => ({
    handleGetFilmList() {
      dispatch(actions.asyncFilmList())
    }
  })
)(Film)
