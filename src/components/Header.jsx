import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from '../App';

export const Header = () => {
    const {cart} = useContext(cartContext)
    const [search, setSearch] = useState('')
  return (
    <div className="header">
    <div className='logo'>
        <h4>FOOFIE</h4>
    </div>
    <div className="navbar">
        <ul>
            <li className='input-section'>
            <form onSubmit={(e)=>e.preventDefault()}>
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
