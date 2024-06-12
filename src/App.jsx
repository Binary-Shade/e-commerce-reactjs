import { Header } from "./components/Header"
import { Route, Routes, useActionData } from 'react-router-dom' 
import Home from "./components/Home"
import Cart from "./components/Cart"
import About from "./components/About"
import Error from "./components/Error"
import { createContext, useEffect, useState } from "react"

//context creation
export const cartContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  // fake api fr testing
  const URL = 'https://fakestoreapi.com/products'
  const [cart, setCart] = useState ([]) 

  useEffect(()=>{
    const fetchItems = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setItems(data)
      console.log(items);
    } 

    fetchItems();
  }, [])
  return (
    <cartContext.Provider value={{cart, setCart, items}}>
      <Header />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart products = {cart} cart={cart} setCart={setCart}/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
    </cartContext.Provider>
  )
}

export default App
