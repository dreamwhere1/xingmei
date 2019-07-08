/* eslint-disable no-script-url */
import React, { Component } from 'react'
import { FindWrap } from './style'
export default class Find extends Component {
  render() {
    return (
      <FindWrap>
        <section>
          <div className="banner">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="javascript:;">
              <img
                src="http://img2.ixingmei.com/uploads/allimg/180302/1858192-1P3021021020-L.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="content">
            <div className="time">
              <span>02</span>
              <br />
              <span>3月</span>
            </div>
            <div className="detail">
              <dl>
                <dt>新人有礼</dt>
                <dd>开抢时间：2018年3月2日 10:20:37</dd>
              </dl>
            </div>
            <div className="arrow">
              <p>进行中</p>
            </div>
          </div>
        </section>
      </FindWrap>
    )
  }
}
