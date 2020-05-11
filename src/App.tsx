import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Product from './components/Product'
import Store from './components/Store'
import Default from './components/Default'

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Product />
      <Store />
      <Default />
    </>
  )
}

export default App
