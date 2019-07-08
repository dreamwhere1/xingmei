import React, { Component } from 'react'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Loading } from 'element-react/next'

import '@/untils/standard.less'
import 'element-theme-default'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/search"
            component={Loadable({
              loader: () => import('@/views/search'),
              loading: () => <Loading fullscreen text="玩命加载中..." />
            })}
          />
          <Route
            exact
            path="/detail/:id"
            component={Loadable({
              loader: () => import('@/views/detail'),
              loading: () => <Loading fullscreen text="玩命加载中..." />
            })}
          />
          <Route
            exact
            path="/login"
            component={Loadable({
              loader: () => import('@/views/login'),
              loading: () => <Loading fullscreen text="玩命加载中..." />
            })}
          />
          <Route
            path="/"
            component={Loadable({
              loader: () => import('@/views'),
              loading: () => <Loading fullscreen text="玩命加载中..." />
            })}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
