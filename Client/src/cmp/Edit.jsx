import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Edit = () => {
  return (
    <div className='edit' >
      <div className="side-links">
        <br />
        <Link to="Add" >Add User</Link> <br /> <br />
        <Link to="Delete" >Delete</Link> <br /> <br />
        <Link to="Update" >Update</Link>
      </div>
      <div className="operation">
          <Outlet />
        </div>
    </div>
  )
}

export default Edit