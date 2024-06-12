import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from '../App';

export const Header = () => {
    const {cart} = useContext(cartContext)
  return (
    <div className="header">
    <div className='logo'>
        <h4>FOOFIE</h4>
    </div>
    <div className="navbar">
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/cart'}> <FaShoppingCart /> {cart.length} cart
                </Link>
            </li>
            <li>
                <Link to={'/about'}>about</Link>
            </li>
        </ul>
    </div>
    </div>
  )
}
