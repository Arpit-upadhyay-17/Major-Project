import React, { useContext, useEffect, useRef, useState } from "react";
import { searchContext } from "../Context/Context";
import { useNavigate, useSearchParams } from "react-router-dom";
import Products from "./Products";
import "../styles/Home.css";
import sort from "../assests/sort.png"
import Search from "../Cmp/Search";
import { back } from "../assests";
const SearchPage = () => {
  const S = useContext(searchContext);
  const  navigate  = useNavigate()
  const [items , setItem ] = useState();
  const [SearchParams] = useSearchParams();
  const [ isClicked , setIsClicked ] = useState(false);
  const sortRef = useRef();
  
  const filter = useRef();

  useEffect(() => {
  
    document.title = "Search Products"
      S.SearchResult === null && S.searchProducts( SearchParams.get("search")) ?  setItem(S.SearchResult) : setItem(S.SearchResult)
    
  } , [S.SearchResult] )

  const handleClick = () => {
    // console.log("clcid");
     if(!isClicked ) {
       filter.current.classList.add("filter-show");
       return setIsClicked(true)
      }
     else {
      filter.current.classList.remove("filter-show");
      return setIsClicked(false)
     }
  } 

  const applyFilterByPriceLowToHigh = (e) => {
    // console.log(e.target.innerText );
    sortRef.current.innerText = e.target.innerText;
    filter.current.classList.remove("filter-show")
    let newItems = items.sort((a,b) => {
      return a.price - b.price;
    })
    console.log(newItems);
    setItem(newItems )
    return setIsClicked(false)
  }


  const applyFilterByPriceHighToLow = (e) => {
    // console.log( e.target.innerText  );
    sortRef.current.innerText = e.target.innerText
    filter.current.classList.remove("filter-show")
    let newItems = items.sort((a,b) => {
      return b.price - a.price ;
    })
    console.log(newItems);
    setItem(newItems )
    return setIsClicked(false)
  }



  const applyFilterByName = (e) => {
    // console.log(e.target.innerText );
    sortRef.current.innerText = e.target.innerText
    filter.current.classList.remove("filter-show")
    let newItems = items.sort((a,b) => {
        if ( a.title.toLowerCase() > b.title.toLowerCase() ) return 1 ;
        if ( a.title.toLowerCase() < b.title.toLowerCase() ) return -1 ;
        return 0;
    })
    setItem(newItems )
    return setIsClicked(false)
  }

  const handleClickOnDiv = () => {
    console.log("me and me");
    return filter.current.classList.remove("filter-show");
  }

  
  

  return (
    <>
      {S.SearchResult !== null ? (
        <div className="searchPage pt-2 mt-3"  style={{ position : "relative" }} >
          
          <div className="container">
           <div className="d-flex flex-wrap justify-content-between align-items-center bg-darkk p-2" style={{ gap : "10px" }}  >
              <img src={back} width="35px" title="Back" alt="back" className="btn-back" onClick={() => navigate(-1)} />
            <p className="mb-0"> Showing results for <b>{SearchParams.get("search")}</b> </p>
              
            <p className=" mb-0"> Total <b>{S.SearchResult.length}</b> results found </p>
            <button className="filter-btn"  type="button" style={{zIndex : "17"}} onClick={handleClick}  ><span ref={sortRef} >  Sort</span> <img src={sort} alt="sort" width="18px" /> </button>
          
          </div>
          <div className="mt-2 d-flex align-items-center border-bottom pb-3 mb-3">
            {/* <div className="col-md-8" > */}
            <Search  /> 
            {/* </div> */}
          </div>
          </div>
          <div className="filters border border-1 p-3 rounded" ref={filter} >
              <p className="mb-0" ><b>By price</b></p>
              <ul className="pl-2 mb-0">
                <li>
                  <p className="mb-0" onClick={applyFilterByPriceLowToHigh} >low to high </p>
                </li>
                <li>
                  <p className="mb-0" onClick={applyFilterByPriceHighToLow} >High to low </p>
                </li>
              </ul>
                  <p onClick={applyFilterByName} > <b> By name </b> </p>
            </div>
            
          <Products products={items} />
        </div>
      ) : (
        <center className="mt-3" >
            <br />
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <br /> <span>Data is Loading...</span>
        </center>
      )}
    </>
  );
};

export default SearchPage;
