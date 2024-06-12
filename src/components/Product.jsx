import React from 'react'
import { useContext } from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import { cartContext } from '../App';

const Product = ({product}) => {
    const addCart = () => {
        setCart([...cart, product])
    }
    const {cart, setCart} = useContext(cartContext)
  return (
    <div key={product.id} className='product-container'>
        <p> {product.title.length > 20 ? product.title.slice(0, 20)+ '...' : product.title} </p> 
        <img src={product.image} alt={product.title} />
        <p className='price'> price : ${product.price} </p>
        <button className='cart-btn' type='button' onClick={addCart}>
            <AiOutlineShopping />
            add to cart
            </button>
    </div>
  )
}

export default Product