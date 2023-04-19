import React, { useEffect, useState } from 'react';
import { useHref } from "react-router-dom"
const NotFound = () => {
    const [ active , setActive ] =  useState(false)
    const [ seconds , setSeconds ] = useState(5);
    useEffect(() => {

        if( seconds === 0 ){
            location.href = ("/")
        }
        console.log("you are going to redirect in 150ms");
        const a = setInterval(() => {
            setSeconds(seconds -1);
        } ,1000)

        return( () =>{
            clearInterval(a)
        }
        )

    } , [active , seconds] )
  return (
    <div onLoad={ () => setActive(true) } >
        <center> <p style={{ color : "Red" , fontSize : "30px" }} > <br /> 
        <br /> 
        <br />
        <br />  Page Not Found</p> 
            <p>You are going to redirect in {seconds} seconds  </p>
         </center>
    </div>
  )
}

export default NotFound;