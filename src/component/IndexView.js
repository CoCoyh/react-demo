import React, {Component} from 'react'
import '../App.css'

import {
  Link,
} from 'react-router-dom'

class IndexView extends Component {
  render() {
    return(
      <ul>
        <li className="index-item">
          <Link to="/list" className="index-item-link">去到列表</Link>
        </li>
      </ul>
    )
  }
}

export default IndexView
