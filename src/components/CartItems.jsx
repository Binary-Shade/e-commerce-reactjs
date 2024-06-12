import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { cartContext } from '../App';

const CartItems = ( {product} ) => {
    const removeCart = () => {
        setCart(
            cart.filter((c)=>(
                c.id !== product.id
            ))
        )
    }
    const {cart, setCart} = useContext(cartContext);
  return (
      <>
        <div key={product.id} className='product-container'>
        <p> {product.title.length > 20 ? product.title.slice(0, 20)+ '...' : product.title} </p> 
        <img src={product.image} alt={product.title} />
        <p className='price'> price : ${product.price} </p>
        <button
            type='button'
            className='btn-remove'
            onClick={removeCart}
        >
            <RxCross2 />
            Remove from cart
        </button>
    </div>
    </>
  )
}

export default CartItems