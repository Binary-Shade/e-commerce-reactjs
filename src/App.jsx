import { Header } from "./components/Header";
import { Route, Routes } from 'react-router-dom'; 
import Home from "./components/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import Error from "./components/Error";
import { createContext, useEffect, useState } from "react";

// Context creation
export const cartContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cart, setCart] = useState([]); 
  const [search, setSearch] = useState('');

  const URL = 'https://api.escuelajs.co/api/v1/products';

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setItems(data);
      console.log(data);
      setFilteredItems(data);  // Set initial filtered items to all items
    }; 

    fetchItems();
  }, []);

  // Effect for filtering items based on search input
  useEffect(() => {
    const searchVal = search.toLowerCase();
    const filteredProducts = items.filter((item) =>
      item.title.toLowerCase().includes(searchVal)
    );
    setFilteredItems(filteredProducts);
  }, [search, items]);

  return (
    <cartContext.Provider value={{ cart, items: filteredItems, search, setSearch, setCart }}>
      <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div> 
    </cartContext.Provider>
  );
}

export default App;
