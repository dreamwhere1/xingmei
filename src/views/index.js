import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Loading } from 'element-react/next'
import * as styled from './style'

import './index.less'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuList: [
        {
          path: '/',
          url: 'http://m.ixingmei.com/images/nav/home.png',
          title: '首页'
        },
        {
          path: '/movie',
          url: 'http://m.ixingmei.com/images/nav/movie.png',
          title: '电影'
        },
        {
          path: '/find',
          url: 'http://m.ixingmei.com/images/nav/find.png',
          title: '发现'
        },
        {
          path: '/center',
          url: 'http://m.ixingmei.com/images/nav/account.png',
          title: '我的'
        }
      ]
    }
  }
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/center"
            component={Loadable({
              loader: () => import('./index/center'),
              loading: () => <Loading fullscreen text="拼命加载中..." />
            })}
          />
          <Route
            exact
            path="/movie"
            component={Loadable({
              loader: () => import('./index/movie'),
              loading: () => <Loading fullscreen text="拼命加载中..." />
            })}
          />
          <Route
            exact
            path="/find"
            component={Loadable({
              loader: () => import('./index/find'),
              loading: () => <Loading fullscreen text="拼命加载中..." />
            })}
          />
          <Route
            exact
            path="/home"
            component={Loadable({
              loader: () => import('./index/home'),
              loading: () => <Loading fullscreen text="拼命加载中..." />
            })}
          />
          <Redirect to="/home" />
        </Switch>
        <footer id="footer" className="fixed-Width ui-footer">
          <div className="nctouch-footer-wrap posr">
            <div className="nav-text clearfix">
              {this.state.menuList.map((item, index) => (
                <styled.NavLinkWrap to={item.path} key={index}>
                  <styled.EmWrap
                    style={{ backgroundImage: `url(${item.url})` }}
                  />
                  <styled.SpanWrap>{item.title}</styled.SpanWrap>
                </styled.NavLinkWrap>
              ))}
            </div>
          </div>
        </footer>
      </>
    )
  }
  componentDidMount() {
    let first = document.getElementsByClassName('nav-text')[0].firstChild
    first.onclick = e => {
      if (first.className.indexOf('active') > -1) return
      first.className = first.className + ' active'
    }

    window.onhashchange = e => {
      let first = document.getElementsByClassName('nav-text')[0].firstChild
      let dom = document.getElementsByClassName('active')
      if (dom.length > 1) {
        dom[0].className = dom[0].className
          .split(' ')
          .slice(0, dom.length)
          .join(' ')
      }
      if (
        e.newURL.split('/#/')[1] === 'home' &&
        first.className.indexOf('active') === -1
      ) {
        first.className = first.className + ' active'
      }
    }

    window.onload = () => {
      let dom = document.getElementsByClassName('active')
      if (dom.length > 1) {
        dom[0].className = dom[0].className
          .split(' ')
          .slice(0, dom.length)
          .join(' ')
      }
    }
  }

  componentWillUnmount() {
    window.onhashchange = null
  }
}
