import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from '../App';

export const Header = () => {
    const {cart, search, setSearch} = useContext(cartContext)
    const [count, setCount] = useState('')
    useEffect(() => {
        if (cart.length !== 0) {
            const totalQuantity = cart.reduce((acc, curr) => acc + parseInt(curr.quantity), 0);
            setCount(totalQuantity);
        } else {
            setCount(0);
        }
    }, [cart]);

  return (
    <div className="header">
    <div className='logo'>
    <svg xmlns="http://www.w3.org/2000/svg" color='#fff' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
        <h4>SHOOPY</h4>
    </div>
    <div className="navbar">
        <ul>
            <li className='input-section'>
            <form>
                <label htmlFor="search">search products</label>
                <input type="text"
                className='search-box' 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder= 'search products'
                />
            </form>
            </li>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/cart'}> <FaShoppingCart /> {count} cart
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
