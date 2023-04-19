import axios from 'axios';
import React , { useReducer, useState } from 'react';
const reducer = ( state , action ) => {
    if( action.type === "spaceTrue" ){
        return { ...state ,
            msg1 : "Email should not contain spaces"  
    }
    }

    if( action.type === "spaceFalse" ){
        return { ...state ,
             msg1 : "" 
    }
    }

    if( action.type === "numberTrue" ){
        return { ...state ,
              msg2 : "Name should not contain number ,special characters"  
        }
    }

    if( action.type === "numberFalse" ){
        // let value = {alertOnNumber : false}
        return { ...state ,
              msg2 : ""  
        }
    }


}

const Profile = () => {
    const  [ state , dispatch ]  = useReducer( reducer , {  msg1 : "" ,
          msg2 : " "   ,
          msg3 : "" })
    const [ formdata , setFormData ] = useState({
        
         email : " "  ,
         password : "" ,
         
    })
    const [ tryLogin , setTryLogin ] = useState(false);
    const handleClickOnInput = (e) => {
       console.log("clicked");
    }


    const handleChange = (e) => {
        const { name , value } = e.target;
        console.log(name , value);
       
            
            if( name === "email"  ) { 
                if(!value.includes(" ")){
                dispatch( { type : "spaceFalse" } )
             }
            else{ 
                console.log("return from email");
               return dispatch({ type : "spaceTrue" });
             }
            }
        
        if(name === "name"){
            let regex = /^[a-zA-Z ]*$/ ;
            if(regex.test(value)) {
                console.log(regex.test(value));
                 dispatch( { type :  "numberFalse" } ) }
                 else {
                    console.log("Return");
                   return  dispatch({ type : "numberTrue" }) ;
                 }
        }
        // if( name === "address"  && value.length <=50  ){

        // }




        return setFormData({...formdata , [name] : value  })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( formdata.name !== "" && formdata.email !== "" && formdata.password !== "" ){
            
        }
        console.log(formdata);
        e.target.reset();
        return alert("form submitted")
    }
  return (
      <div className='mt-3 '  >
        {console.log( state )} 
        <h6 className='p-2 text-center' >Register yourself and Setup your profile </h6>
        <form onSubmit={handleSubmit} className='pt-3 pb-3 register-form rounded shadow-sm' style={{border : "1px solid rgba(0,0,0,0.04)"   }}   >
            <h5 className='p-2' >Basic Information</h5>
            <br />
            <div className="m-2 p-2 input-div"  >
                <label htmlFor="name"  >Full Name</label>
                 <span className='warning' > { state.msg2 ? state.msg2 : formdata.name.length === 0 && state.msg3 }  </span> 
                <input type="text" id='name'  value={formdata.name} onChange={handleChange} placeholder='Jhon doe' name='name' onClick={handleClickOnInput}  required  />
            </div>
            <br />
            <div className="m-2 p-2 input-div" >
                <label htmlFor="email"   >Email</label>
                
                 <span className='warning' > { state.msg1 ? state.msg1 : formdata.email.length === 0 && state.msg3  } </span> 
                <input type="email" value={formdata.email} onChange={handleChange} placeholder='jhon81@gmail.com' id='email' name='email' onClick={handleClickOnInput}  required  />
            </div>
            <br />
            <div className="m-2 p-2 input-div"   >
                <label htmlFor="password"  >Password</label>
                <input type="Password" id='password' value={formdata.password} onChange={handleChange} placeholder='*******' name='password'  onClick={handleClickOnInput} required  />
            </div>
            <br />
            <h5 className='p-2' >Address</h5>
            <br />
            <div className="m-2 p-2 input-div"  >
                <label htmlFor="name" style={{width : "150px" , padding : "2px"}}  >Current Address</label>
                {/* <textarea  value={formdata.address} placeholder="Barela, Jabalpur , Madhya Pradesh, 483001" onChange={handleChange}  name='address'  required  ></textarea> */}
                <div className=' d-flex flex-wrap mt-3' >
                    <input type="text"  style={{ width : "220px" }} placeholder='Nearest famous place' name='F_place' value={formdata.F_place} onChange={handleChange} onClick={handleClickOnInput}  />
                    <input type="text" style={{ width : "220px" }} placeholder='Zone No' name='zone' value={formdata.zone} onChange={handleChange} onClick={handleClickOnInput} />
                    <input type="text" style={{ width : "220px" }} placeholder='city' name='city' value={formdata.city} onChange={handleChange} onClick={handleClickOnInput} />
                    <input type="text" style={{ width : "220px" }} placeholder='state' name='state' value={formdata.state} onChange={handleChange} onClick={handleClickOnInput} />
                    <input type="text" style={{ width : "220px" }} placeholder='Pin Code' name='pinCode' value={formdata.pinCode} onChange={handleChange} onClick={handleClickOnInput} />
                </div>
            </div>

            <div className="mt-3 p-2 text-center">
                <input type="submit" style={{ width : "213px" }} className='btn btn-success' value="Register" />
                <center> 
                    <p className='mt-3' >Already user try <u className='text-600 text-primary' onClick={() => setTryLogin(true)} style={{cursor : "pointer"}} >login</u> 👇 </p>
                </center>

                {/* <input type="submit" style={{ width : "213px" }} className='btn btn-info' value="Login" /> */}
            </div>
        </form>
        <br />
    </div>
  )
}

export default Profile;