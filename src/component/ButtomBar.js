import React, {Component} from 'react'
import '../App.css'
import {
  Link,
} from 'react-router-dom'

class ButtomBar extends Component{
  render() {
    return (
      <div className = "buttom-bar">
        <Link className="buttom-bar-button" to='/'>首页</Link>
        <Link className="buttom-bar-button" to='/shopping_car'>购物车</Link>
      </div>
    )
  }
}

export default ButtomBar
