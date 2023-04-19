import { useEffect } from "react";
import { likedSound } from "../assests/index"
const audio = new Audio(likedSound)


const Alert = ( { alertMsg , setAlertMsg  }  ) => {
  useEffect(() => {
    let timeout ;
    if( alertMsg.show === true ){
        try {
          audio.play()
        } catch (error) {
          console.log(error);
        }
        console.log("alerted");
        timeout = setTimeout(() => {
        setAlertMsg({ show : false , msg : null } )
       }  , 1000 ) 
    }
    return () => {
      clearTimeout(timeout)
      setAlertMsg({ show : false , msg : null } )
    }
  } , [] )
  return (
    <>
       <p className="alert-msg"> { alertMsg.msg }</p>  
    </>
  )
}

export default Alert;