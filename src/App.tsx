import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Product from './components/Product'
import Store from './components/Store'
import Default from './components/Default'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </Router>
  )
}

export default App
