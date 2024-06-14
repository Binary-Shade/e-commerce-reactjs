import React from 'react'
import Product from './Product'
import { useContext } from 'react'
import { cartContext } from '../App'
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const Home = () => {
  const { items } = useContext(cartContext)
  const itemsPerPage = 10
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    <h2>Products</h2>
    <div className="home">
        {
        currentItems.map((product)=> (
            <Product key={product.id} product = {product}/>
        ))
      }
      
    </div>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
      />
    </>
    
  )
}

export default Home