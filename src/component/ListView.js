import React, {Component} from 'react'
import {fakeApi} from '../mock/fakeApi'
import '../App.css'
import {
  Link
} from 'react-router-dom'

class ListView extends Component {
  state = {
    data: []
  }
  componentWillMount() {
    fakeApi.getList((data) => {
      console.log(data)
      this.setState({
        data: data
      })
    })
  }
  render() {
    const {data} = this.state
    return (
      <ul className ="list">
      {
        data.map((v, k)=>(
          <li key={v.id}>
          <Link to={`/detail/${v.id}`} className='item'>
            <img className="item-img" src={v.img} alt=""/>
            <div className="item-wrap">
              <p className='item-name'>{v.name}</p>
              <p className='item-price'>{v.price}</p>
            </div>
          </Link>
          </li>
        ))
      }
      </ul>
    )
  }
}

export default ListView
