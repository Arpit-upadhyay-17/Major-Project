import React, { useContext } from 'react';
import { addUserContext } from '../Context/Context';

const Adduser = () => {
  const addUser = useContext(addUserContext);
  return (
    <div>
      <br />
      <form onSubmit={addUser} >
        Name : <input type="text" name='name' placeholder='User Name' /> 
         &nbsp; 
        Email :  <input type="email" name='email' placeholder='user123@gmail.com' /> <br /> <br />
        Address :<input type="text" name='add' placeholder='enter your add' />
        &nbsp; 
        Image URL : <input type="text" name='img' placeholder='https://images-stock/images/1.' /> <br /> <br />
        Password :  <input type="pass" name='pass' placeholder='*******' /> &nbsp;
        <button type='submit' >Create</button>
      </form>
    </div>
  )
}

export default Adduser