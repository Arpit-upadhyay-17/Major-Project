import React, { useContext, useState } from 'react';
import { userContext } from '../Context/Context';
import User from './User';


const Users = () => {
    const  usersData  = useContext(userContext);
  
  return (
    <div>
        <h3>list of All user</h3>
        <div className="users">
            {
                usersData ? usersData.map(( _user , index ) => {
                    return <User key={index} user={_user} />
                } ) : <>Loading</>
            }
        </div>
    </div>
  )
}

export default Users;