import React, { useState, useContext } from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import { cartContext } from '../App';
import { Toaster, toast } from 'react-hot-toast'

const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const [quan, setQuan] = useState(1);

  const addCart = () => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quan } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: quan }]);
    }
    //toaster
    toast.success('item added to the cart')
  };

  return (
    <>
        <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div key={product.id} className='product-container'>
      <p> {product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title} </p>
      <img src={product.images[0]} alt={product.title} />
      <p className='price'> Price: ${product.price} </p>
      <label htmlFor="quanitity">Quantity : </label>
      <div className="quanitity">
        <span>Quantity : </span>
        <input
          className='🩷'
          type="number"
          value={quan}
          onChange={(e) => setQuan(Number(e.target.value))}
          min="1"
        />
      </div>
      <button className='cart-btn' type='button' onClick={addCart}>
        <AiOutlineShopping />
        Add to Cart
      </button>
    </div>
    </>
  );
};

export default Product;
