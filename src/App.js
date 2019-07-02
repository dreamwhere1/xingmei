import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';

const Wode = Loadable({
    // 需要异步加载的组件
    loader: () => import('./views/Wode'),
    // 加载中的提示组件
    loading: () => <div>加载中</div>
  });

  export default class App extends Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route path="/wode" exact component={Wode} />
          </Switch>
        </Router>
      );
    }
  }
