import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";

const LoginAlert = ({setClicked}) => {
  const navigate  = useNavigate()

//   useEffect(() => {

//     let timeOut = setTimeout(() => {
//       setClicked(false)
//     } , 5000 )


//   return () => {
//     clearTimeout(timeOut)
//   }
// } , [] )
  
  return (
    <div className='LoginAlert' >
        <div className="modal-1 p-2">
            <div className="modal-form">
              <p>Login to continue</p>
              <form  autoComplete='off' >
                  <div className="form-control"  >
                    <label htmlFor="email" >Email</label>
                    <input type="email" id='email' name='email' placeholder='Arpit123@gmail.com' required />
                  </div>
                  <div className="form-control"  >
                    <label htmlFor="password" >Password</label>
                    <input type="password" id='password' name='password' placeholder='********' required />
                  </div>
              </form>
              <p>New user can <u onClick={() => navigate("/profile") } style={{ cursor: "pointer" }} >Register</u> here</p>
            </div>
        </div>
    </div>
  )
}

export default LoginAlert;