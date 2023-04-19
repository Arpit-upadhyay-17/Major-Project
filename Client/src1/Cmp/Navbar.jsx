import React ,  { useContext, useEffect , useState, useRef } from 'react';
import { NavLink , Link } from 'react-router-dom';
import { getLikeContext, kartContext } from '../Context/Context';
import Search from './Search';
import basket from "../assests/basket.png";
import { userContext } from '../Context/Context';
import {logo , userImg } from "../assests/index"
let i = 0;

const Navbar = () => {
  const L = useContext(getLikeContext);
  const { kart } = useContext( kartContext )
  const { user } = useContext(userContext) 
  const div = useRef();
  const btn = useRef();
 

  const handleClick = (e) => {
      window.scrollTo(0,0)
      div.current.classList.remove("show");
  }

  // useEffect (() => {
  //   console.log(L);
  // } , [] )
  

  


  return (
    <nav className={`navbar navbar-expand-lg navbar-light shadow-sm fixed-top bg-darkk px-2 px-1 py-1`}  >
    <Link className="navbar-brand d-flex align-items-center " style={{ color : "#a84d00" , fontWeight : "600" }} to="/">
       <img src={logo} width="100px" /> 
    </Link>
    <button
      ref={btn}
      className="navbar-toggler border-0"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      { user ? (
        // <span className='text-warning'  >
        // { user.name.split(" ")[0].toUpperCase() }
        // </span>
        <img src={userImg} className="border" style={{ padding : "2px" ,borderRadius : "20px"  }}  width="35px" alt="" />
        ) : (
          <span className="navbar-toggler-icon" />
      ) }
    </button>
    <div className="collapse navbar-collapse" ref={div} id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto w-100 justify-content-end" style={{ gap :"20px" }}  >
        {/* <li className="nav-item active"> */}
        <li className="nav-item">
        <NavLink to="/" className='nav-link' onClick={handleClick} >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Category" className='nav-link'  onClick={handleClick} >Category</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink to="/Liked" className='nav-link Like-link' onClick={handleClick} >Fav<sup className='Liked-Count' >{ L.LikeCount || 0 } </sup> </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Cart" className='nav-link Like-link' onClick={handleClick} ><img src={basket} width="25px" alt="basket" /><sup className='Liked-Count' > { kart.count } </sup> </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/About-us" className='nav-link' onClick={handleClick} > About us </NavLink>
        </li>
       
      {/* <li className="nav-item" >
        <Search />
       </li> */}
      {/* </ul>
        <ul className="navbar-nav mr-auto w-50 justify-content-center " > */}
        <li className="nav-item">
          {/* <button className='nav-link' onClick={handleClick} > Button </button> */}
        <Link to="/profile"   onClick={handleClick}  className='nav-link' id='Login-profile' >{ user ? <>{ user.name }</>: <>Login</> }  </Link>
        </li>
        </ul>
        {/* <Search /> */}

    </div>
  </nav>
  



//   {/*  <nav>
//          <Link to="/" >Home</Link> &nbsp;&nbsp;
//         <Link to="/Category" >Category</Link>&nbsp;&nbsp;
//         <Link to="/Liked" className='Like-link' >Fav <span className='Liked-Count' >{ L.LikeCount } </span> </Link>&nbsp;&nbsp; */}
//         {/* <Link to="/Search" >Search</Link>&nbsp;&nbsp; */}
// {/*         
//         <button  onClick={ () => window.location.reload() } > Reload </button>&nbsp;&nbsp;
//         <button onClick={() => navigate(-1) } >Back</button> */}
//     {/* </nav> */}
  )
}

export default Navbar