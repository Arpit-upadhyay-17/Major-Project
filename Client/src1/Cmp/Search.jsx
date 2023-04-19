import React, { useContext, useRef, useState } from 'react';
import { searchContext } from '../Context/Context';
import Product from "./Product";
import { searchImg } from "../assests/index"

const Search = () => {
    const { searchProducts , SearchResult , IsSearching , setIsSearching } = useContext(searchContext);


    const handleSubmit = (e) => {
      e.preventDefault();
      window.scrollTo(0,0)
      // IsSearching , setIsSearching
      setIsSearching(true)
      let search = e.target.search.value;
      if( search.length < 4){
        return alert("Minimum 3 character required")
      }
       searchProducts(search);
       return  e.target.reset();
    }

  return (
    // <div className="search"> 
    //           <form onSubmit={ handleSubmit } className="d-flex">
    //            <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search" aria-label="Search" />
    //            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //           </form>
    // </div>
    <div className="search my-1" > 
              <form onSubmit={ handleSubmit } id="serach-form" autoComplete='off'>
               <input className=""  id='input-box' name="search" autoComplete='off' placeholder={ IsSearching ? `Searching...` : "Search for products" }  />
               {
                IsSearching ?(

                  // <center >
                 <button>
                  <div className="spinner-border text-secondary spinner-border-sm" role="status">
                    <span className="sr-only">Loading...</span>
                 </div>
                 </button>
                 //  {/* &nbsp;Loading... */}
            //  </center>

                ):(
               <button type="submit" > <img src={ searchImg } width="25px" alt="search" /> </button>
                )}
              </form>
    </div>
  )
}

export default Search