import React, { Component } from 'react'
// import { connect } from 'react-redux';
import { LoginWrap } from './style'
import { Icon } from 'antd'
import './index.css'

class Wode extends Component {
  render() {
    return (
      <div className="wode-body">
        <div className="member-top">
          <LoginWrap className="icons-list">
            <Icon type="setting" className="icon-setting" />
            <Icon type="more" className="icon-more" rotate={90} />
          </LoginWrap>
          <div className="member-info">
            <div className="logn_in" />
            <p
              className="to-logn"
              onClick={() => this.props.history.push('/login')}
            >
              点击登录
            </p>
          </div>
          <div className="member-collect" />
        </div>

        <div className="member-center">
          <dl className="mt5">
            <dt className="dt1">
              <p>
                <span className="h3">
                  <Icon type="profile" theme="twoTone" className="profile" />
                  电影订单
                </span>
                <span className="h5">
                  <Icon type="right" className="right" />
                </span>
              </p>
            </dt>

            <dt className="dt1">
              <p>
                <span className="h3">
                  <Icon type="profile" theme="twoTone" className="profile" />
                  其他订单
                </span>
                <span className="h5">
                  <Icon type="right" className="right" />
                </span>
              </p>
            </dt>

            <dd>
              <ul>
                <li>
                  <p>
                    <Icon type="reconciliation" className="reconciliation" />
                    <span>待付款</span>
                  </p>
                </li>

                <li>
                  <p>
                    <Icon type="reconciliation" className="reconciliation" />
                    <span>待付款</span>
                  </p>
                </li>

                <li>
                  <p>
                    <Icon type="reconciliation" className="reconciliation" />
                    <span>待付款</span>
                  </p>
                </li>

                <li>
                  <p>
                    <Icon type="reconciliation" className="reconciliation" />
                    <span>待付款</span>
                  </p>
                </li>

                <li>
                  <p>
                    <Icon type="reconciliation" className="reconciliation" />
                    <span>待付款</span>
                  </p>
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="mt5">
            <dt className="dt1">
              <p>
                <span className="h3">
                  <Icon type="profile" theme="twoTone" className="profile" />
                  我的财产
                </span>
                <span className="h5">
                  查看全部财产
                  <Icon type="right" className="right" />
                </span>
              </p>
            </dt>
          </dl>

          <dl className="mt5">
            <dt className="dt1">
              <p>
                <span className="h3">
                  <Icon type="profile" theme="twoTone" className="profile" />
                  收货地址管理
                </span>
                <span className="h5">
                  <Icon type="right" className="right" />
                </span>
              </p>
            </dt>
            <dt className="dt1">
              <p>
                <span className="h3">
                  <Icon type="profile" theme="twoTone" className="profile" />
                  用户设置
                </span>
                <span className="h5">
                  <Icon type="right" className="right" />
                </span>
              </p>
            </dt>
          </dl>
        </div>
      </div>
    )
  }
}

export default Wode
