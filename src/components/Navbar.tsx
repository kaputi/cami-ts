import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return ( 
      <nav className="navbar navbar-expand-sm px-sm-5">
        <ul className="navbar-nav align-items-center">

          <li className="nav-item ml-5">
            <Link to='/' className="nav-link">
             Store 
            </Link>
          </li>   
          <li className="nav-item ml-5">
            <Link to='/cart' className="nav-link">
             Cart 
            </Link>
          </li>   
          <li className="nav-item ml-5">
            <Link to='/product' className="nav-link">
             Product
            </Link>
          </li>   
        </ul>
        <Link to='/cart' className="ml-auto">
          <button>
            Cart
          </button>
        </Link>
      </nav>
    )
  }
}
