import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Cmp/Categories";
import CategoryPage from "../Cmp/CategoryPage";
import "../styles/Home.css";


const Category = () => {
  const [ title , setTitle ] = useState("Categories")

  const handleClick = (e) => {
     setTitle(`Top results for ${e.target.innerText}`)
    let scroll = e.target.parentElement.clientHeight; 
    console.log(  scroll);
    return window.scrollTo(0, scroll +10 );
  };


  useEffect(() => {
    document.title = title.toLowerCase()
  } , [title] )
  
  return (
    <div className="mt-1">
        <br />
        <h5 className='container pb-3 pl-0 mb-0 border-bottom border-warning' >Choose from 15+ Categories </h5>
      <div className="category pt-3">
        <div className="container side-links">
          <Categories handleClick={handleClick} />
        </div>
        <div className="products-of-category">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Category;
