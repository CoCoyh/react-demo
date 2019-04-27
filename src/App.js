import React, {Component} from 'react';

import ButtomBar from './component/ButtomBar'
import IndexView from './component/IndexView'
import ListView from './component/ListView'
import ShoppingCarView from './component/ShoppingCar'
import DetailView from './component/DetailView'
import Nav from './component/Nav'
import './App.css'

import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <div className = "App-main-view">
            <Route className="main-view" path="/" exact component={IndexView}></Route>
            <Route className="main-view" path="/list" exact component={ListView}></Route>
            <Route className="main-view" path="/detail/:id" exact component={DetailView}></Route>
            <Route className="main-view" path="/shopping_car" exact component={ShoppingCarView}></Route>
          </div>
          <Route path="/" exact component={ButtomBar}></Route>
        </div>
      </Router>
    )
  }
}


export default App;
