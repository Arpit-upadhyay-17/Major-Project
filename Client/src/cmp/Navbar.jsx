import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/user" >User</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/edit" >Edit</Link>
    </nav>
  )
}

export default Navbar