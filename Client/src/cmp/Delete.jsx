import React, { useContext, useState } from 'react'
import { deleteContext , userContext } from '../Context/Context'
const Delete = () => {
  const  deleteUser = useContext(deleteContext);
  const  usersData = useContext(userContext);

  if(!usersData){
      return location.href = ("/user")
  }
  return (
    <div>
      { usersData ? console.log("okey") : <>Loading</>  }
      {
        usersData.map(user => {
          return (
            <form onSubmit={deleteUser} key={user._id} >
              {user.name} : <input type="hidden" name='id' value={user._id}  placeholder='id' />
              &nbsp;
            <button type='submit' > delete </button> <br /> <br />
          </form> 
          )
        })
      }
    </div>
  )
}

export default Delete