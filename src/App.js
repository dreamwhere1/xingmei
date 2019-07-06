import React ,{Component}from'react';
import {HashRouter as Router,Route ,Switch}from 'react-router-dom';
import Film from './film';
import Find from './find';
import Home from './home';
export default class App extends Component{
    render(){
        return(

            <Router>
               <Switch>
               
               <Route path="/film" component={Film}/>
               <Route path="/find" component={Find}/>
               <Route path="/" component={Home}/>
               </Switch>
            </Router>
        )
    }
}