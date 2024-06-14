import React, { useContext, useEffect, useState } from 'react'
import CartItems from './CartItems'
import { LuShoppingBag } from "react-icons/lu";
import { cartContext } from '../App';

const Cart = () => {
  const [total ,setTotal] = useState(0)
  const {cart} = useContext(cartContext)
  useEffect(()=>{
    setTotal(
      cart.reduce((acc, curr)=>{
        return acc + (parseFloat(curr.price) * curr.quantity )
      },0)
    )
    console.log(total);
  }, [cart])
  
  // Check if products array is empty
  if (cart.length === 0) {
    return <p className='🦆'>No products in the cart.</p>;
  }

  return (
    <div className='👍'>
      <div className="overall">
        <h2 className='heading'>Cart items</h2>
        <div className='total'>
          <div className="amount">
            <LuShoppingBag />
            <p>Total: ${Math.round(total)}</p>
          </div>
        </div>
      </div>
      {
        cart.map((product) => (
          <CartItems key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Cart
