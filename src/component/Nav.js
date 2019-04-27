import React, {Component} from 'react'
import '../App.css'

import {
  Route,
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <Route 
        path='/'
        children={(routerProps) => {
          console.log('routerProps', routerProps);
          const isRenderButton = routerProps.location.pathname ==='/' ? false : true
          let pathname = routerProps.location.pathname
          if (pathname.indexOf('/detail') !== -1) {
            pathname = '/detail'
          }
          let pageName = ""
          switch(pathname) {
            case "/":
              pageName = "首页"
              break;
            case "/shopping_car":
              pageName = "购物车"
              break;
            case `/detail`:
              pageName = "商品详情"
              break;
            case "/list":
              pageName = "商品列表"
              break;
            default:
              pageName = "404页面不存在"
              break;
          }
          return (
            <div className="nav">
              {isRenderButton ? (
                  <button className="goback" onClick={routerProps.history.goBack}>{"<"}</button>
                ) : ""
              }
              <p className="page-title">{pageName}</p>
            </div>
          )
        }}
      >
      </Route>
    )
  }
}

export default Nav
