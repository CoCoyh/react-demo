import React, {Component} from 'react'
import {fakeApi} from '../mock/fakeApi'
import '../App.css'

import {
  Link
} from 'react-router-dom'


class ShoppingCarView extends Component{
  state =  {
    data: []
  }
  componentWillMount() {
    fakeApi.getShoppingCar((data) =>{
      this.setState({data: data})
    })
  }
  render() {
    const {data} = this.state
    console.log('shoppingCar', data)
    return (
      <ul className="shopping-view">
        {
          data.map((v, k) => (
            <Link to={`/detail/${v.id}`} key={v.id }>
              <li className = 'shopping-item'>
                <img className="item-img" src={v.img} alt=""/>
                <div className="item-wrap">
                  <p className="item-name">{v.name}</p>
                  <p className="item-price">{v.price}</p>
                </div>
              </li>
            </Link> 
          ))
        }
      </ul>
    )
  }
}

export default ShoppingCarView