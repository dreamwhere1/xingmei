import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '@/store/detail/actionCreates'
import { Message } from 'element-react/next'

import './detail.less'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curClass: 1,
      id: ''
    }
  }
  render() {
    let {
      good,
      good: { result },
      history,
      emptyGood
    } = this.props
    if (good.code === '200') {
      return (
        <>
          <div style={{ backgroundColor: '#eee' }}>
            <div className="_3V7lU774psYZeX5YMgSQau">
              {' '}
              <span className="_36x_g-EXENn9ctwHn9AIC0"> </span>{' '}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="_1Gm61vPWwVii3eRJtrQQOP"
                // eslint-disable-next-line no-script-url
                href="javascript:history.go(-1)"
              >
                <i className=" el-icon-arrow-left" />
              </a>{' '}
              <h1>
                【深圳市】【万有音乐系】"千与千寻"宫崎骏·久石让动漫视听系列主题音乐会-深圳站
              </h1>
            </div>
            <div className="_2g1a_1-tLiPdEkmJTvP4Ow_0">
              <div className="RfVThSjK5J_kVBtuovemt_0">
                <img src={result.goods_image} alt="" />
              </div>
              <div className="_1lJAJ2p2Kd5UK4SqRD45gp_0">
                <ul>
                  <li>
                    <h1>{result.goods_name}</h1>
                  </li>{' '}
                  <li>时间：{result.goods_time_range}</li>{' '}
                  <li>场馆：{result.venue_name}</li>{' '}
                  <li>票价：{result.goods_price_range}</li>{' '}
                  <li>品牌：{result.out_name}</li>
                </ul>{' '}
                <button className="_2ukgyxWLe23tUR-nN7d6Nx_0">立即购票</button>
              </div>
              <div className="_27M0im7uR_7MBCUozxWBq8_0">
                <div className="_2EdBnaaa65d5qJU-lG8ssP_0">
                  <div className="_1mWntvfCR1BMHL8N8Pdphf_0">图文详情</div>
                  <div
                    className={
                      this.state.curClass
                        ? '_37D5v2quFHuOiDqGKZi2uJ_0 fsm5g2BkOp2bJDy-msYmD_0'
                        : '_37D5v2quFHuOiDqGKZi2uJ_0'
                    }
                    dangerouslySetInnerHTML={{ __html: result.mobile_body }}
                  />{' '}
                  <button
                    className="_2EvIA0fYcY-RWZu51l1-g1_0"
                    onClick={() =>
                      this.setState({ curClass: !this.state.curClass })
                    }
                  >
                    {this.state.curClass ? '查看全部详情' : '收起'}
                  </button>
                </div>
              </div>
              <div className="_27M0im7uR_7MBCUozxWBq8_0">
                <div className="_2EdBnaaa65d5qJU-lG8ssP_0">
                  <div className="_1mWntvfCR1BMHL8N8Pdphf_0">商品推荐</div>{' '}
                  <ul className="_3jJ3iAPlMhtM_ScXKt-QBD_0">
                    {result.goods_commend_list.map(item => (
                      <li key={item.goods_id}>
                        <div className="_21eqD_T7m_o1n_LC0xsUa__0">
                          <div className="_33d5JK2jtA2aRk4buj_xEk_0">
                            <a
                              href={'#/detail/' + item.goods_id}
                              className="_2DAtfbACUaQdVQR7OcSXhX_0"
                            >
                              <img src={item.goods_image_url} alt="" />
                            </a>
                          </div>{' '}
                          <div>
                            <div className="dy8gWTIgdHnHQhs31PTIv_0">
                              <a href={'#/detail/' + item.goods_id}>
                                {item.goods_name}
                              </a>
                            </div>{' '}
                            <div className="_3VzbOvgRNGMehMYqTv-yVr_0">
                              {item.goods_price}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    } else if (good.code === '400' && !this.times) {
      this.times = 1
      Message({
        message: good.message,
        type: 'error',
        duration: 2000,
        onClose: () => {
          emptyGood()
          history.replace('/')
        }
      })
      return (
        <h1 className="error">
          404
          <br />
          <br />
          Page not found
        </h1>
      )
    } else {
      return null
    }
  }

  componentDidMount() {
    let {
      getGoodMsg,
      match: {
        params: { id }
      }
    } = this.props
    this.setState({ id })
    getGoodMsg(id)
  }

  componentWillReceiveProps({
    good,
    getGoodMsg,
    match: {
      params: { id }
    }
  }) {
    if (this.state.id !== id && good.code === '200') {
      this.setState({ id }, () => getGoodMsg(id))
      const dom = document.documentElement || document.body
      dom.scrollTop = 0
    }
  }
}

export default connect(
  ({ detail }) => ({ good: detail.goodMsg }),
  dispatch => ({
    getGoodMsg: id => dispatch(Actions.getGoodMsg(id)),
    emptyGood: () => dispatch(Actions.emptyGood())
  })
)(Detail)
