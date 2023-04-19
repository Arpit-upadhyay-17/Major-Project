import React, { useEffect, useState } from 'react';

const ZoomImage = ({ src , dimension }) => {
    const [ D , setD ] = useState(dimension)
    useEffect(() => {
        setD(dimension)
        console.log( dimension );
    } , [dimension] )
  return (
    <div className='zoom-image' >
        {/* <img src={src} className='p-2' style={{ position : "absolute" , top : dimension.Y , right : dimension.X  }} width="200%" alt="src" /> */}
        <img src={src} className='p-2' style={{ transform : `translate(${ -dimension.X }px  , ${ -dimension.Y }px)`  }} width="165%" alt="src" />
    </div>
  )
}

export default ZoomImage;