import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Apphome from './containers/Apphome'
import Set from './containers/Set'
import {HashRouter as Router,Route,Link} from 'react-router-dom'

ReactDOM.render(
    <Router basename='/'>
        <Route exact path='/' component={App}/>
        <Route exact path='/home' component={Apphome}/>
        <Route exact path='/set' component={Set}/>
    </Router>
    , document.getElementById('root'));
