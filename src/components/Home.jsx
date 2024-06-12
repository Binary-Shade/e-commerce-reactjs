import React from 'react'
import Product from './Product'
import { useContext } from 'react'
import { cartContext } from '../App'

const Home = () => {
  const {items} = useContext(cartContext) 
  return (
    <>
    <h2>Products</h2>
    <div className="home">
        {
        items.map((product)=> (
            <Product key={product.id} product = {product}/>
        ))
      }
    </div>
    </>
    
  )
}

export default Home