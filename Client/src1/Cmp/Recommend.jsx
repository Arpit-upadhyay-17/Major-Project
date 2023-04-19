import React from 'react';
import { Link } from "react-router-dom";


const  RecommandItems = [
  "laptop",
  "Phones",
  "groceries",
   "iphone" ,
  "shoes",
  "shirt",
  "fashion",
  "perfume",
  "watches",
  "furniture"
] 

const Recommend = () => {
  return (
    <div className='d-flex justify-content-betweenn align-items-center Recommand p-1' style={{ gap : "10px" }} >
        {  RecommandItems.map( (item , i  ) => (
          <Link className='btn btn-warning' style={{ borderRadius : "10px !important" }} key={i}  title={`Search for ${item}`}  to={`/search?search=${item}`} target="_blank"  >{item.toUpperCase()}</Link>
        ))}
        {/* <Link className='btn border border-warning products-links' title={}  to="/search?search=smartphones" target="_blank" >Smartphones</Link>
        <Link className='btn border border-warning products-links' title={}  to="/search?search=shoes" target="_blank" >Shoes</Link>
        <Link className='btn border border-warning products-links' title={}  to="/search?search=groceries" target="_blank" >Groceries</Link>
        <Link className='btn border border-warning products-links' title={}  to="/search?search=shirt" target="_blank" >Shirt</Link>
        <Link className='btn border border-warning products-links'  title={} to="/search?search=fashion" target="_blank" >Fashion</Link>
        <Link className='btn border border-warning products-links'  title={} to="/search?search=watch" target="_blank" >Watches</Link>
        <Link className='btn border border-warning products-links' title={}  to="/search?search=sunglasses" target="_blank" >Sunglasseses</Link>
        <Link className='btn border border-warning products-links' title={}  to="/search?search=fragrances" target="_blank" >Fragrances</Link>
        <Link className='btn border border-warning products-links'  title={} to="/search?search=furniture" target="_blank" >Furniture</Link> */}
    </div>
  ) 
}

export default Recommend;