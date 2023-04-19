import React, { useState , useEffect } from 'react'

const Loader = () => {
  const [ isMounted , setIsMounted ] = useState(true)

  useEffect(() => {
    const Timeout = setTimeout( () => {
      setIsMounted(false)
    } , 1200)

    return () => {
      clearTimeout(Timeout);
    }
  } , [])

    return (
      <div className={`loader ${ isMounted ? null : "loader-fade" } `} >
        <div>
          <div className="d-flex justify-content-center" style={{ gap : "10px" }} >
            <div className="spinner-grow spinner-grow-sm text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <br /> <p style={{ fontSize : "18px" }} > <b> App is Loading... </b></p>
          </div>
      </div>
    );
  }

export default Loader;