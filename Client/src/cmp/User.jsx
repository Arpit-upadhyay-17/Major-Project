import React from 'react';

const User = ({user}) => {
  return (
    <div className="user">
          <p className="profile-pic">
            { user.img ? <img src={user.img} alt="profile-pic" /> : <>loading</> }
          </p>
          <p> id : {user._id}</p>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Password : {user.pass}</p>
          <p> <b>Address</b> : {user.add}</p>
    </div>
  );
}

export default User;