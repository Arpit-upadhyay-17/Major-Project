import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { alertContext, getSingleProduct, kartContext, userContext } from '../Context/Context';
import ZoomImage from './ZoomImage';
import LoginAlert from './LoginAlert';
import "./product.css";
import Alert from './Alert';
import { back, sure } from '../assests';

// const Details = ({ item , unset }) => {
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const getProduct = useContext(getSingleProduct);
  const { user } = useContext( userContext )
  const { storeKartProducts ,GetKart , kart } = useContext( kartContext )
  const {alertMsg , setAlertMsg } = useContext( alertContext )
  const [ item , setItem ] = useState(null);
  const [ img , setImg ] = useState();
  const [ isLoaded , setIsLoaded ] = useState(false);
  const [ hover , setHover ] = useState(false);
  const [ dimension , setDimentsion ] = useState({ X : 0 , Y: 0 });
  // const [ alertMsg , setAlertMsg ] = useState({ show : false , msg : null })
  // const [ count , setCount  ] = useState(1)

  const handleClick = () => {
    if( !user ){
      return navigate("/profile")
    }
     storeKartProducts( item.id  )
      .then(res => {
        console.log(res);
        if( res.data.update ){
        GetKart( res.data.CartProducts )
        setAlertMsg( { show : true , msg : res.data.msg } )
        return navigate("/Cart")
        }else{
          return setAlertMsg({ show : true , msg : res.data.msg  })
        }
     }).catch((err) => {
      return setAlertMsg({ show : true , msg : err.msg })
     }) 
  }
  
  useEffect(() => {
    window.scrollTo(0,0)
    getProduct(id)
    .then(res => {
      document.title = res.title + " by " + res.brand ;
      setItem(res)
      
    })
  } , [id])

  const handleMove = (e) => {
    setHover(true)
    let x = e.clientX 
    let y = e.clientY 
    let imgX =  ( e.target.parentElement.parentElement.offsetWidth ) - e.target.offsetWidth
    let imgY =  ( e.target.parentElement.parentElement.offsetWidth ) - e.target.offsetWidth - 50 
    console.log({
      x : x ,
      y : y ,
      imgX : imgX ,
      imgY : imgY ,
    } , e.target.parentElement.parentElement.offsetHeight , e.target.offsetHeight );
    let newValue = { X : x - imgX - 46  , Y : y - imgY -20 }
    setDimentsion(newValue)
    setImg(e.target.src)
  
  }

 
  
  
  
  

  
  return (
    <>
    { item ? (
      <div className='Deatils' style={{ zIndex : "16" }}   >
        <p className='mt-2 mb-1 border border-1 p-2  rounded' >
        <img src={back} width="30px" title="Back" alt="back" className="btn-back" onClick={() => navigate(-1)} />
          <b> Category </b> : {item.category}  
        </p>
        <div className="details-inner-div">
            <div className='detail-parent-div' >
              <div className="details-img ">
                <img src={ img || item.images[0] } onLoad={ () => setIsLoaded(true)  }  onMouseMove={ handleMove } onMouseLeave={ () => setHover(false) } alt="images" />
                { !isLoaded && <>Loading...</> }
              
              </div>
              <div className="images">
                  {
                    item.images.map((img , i ) =>  <img onClick={ (e) => setImg(e.target.src)} src={img} key={i} alt="img" />   )
                  }
              </div>
            </div>
          <div className="details-specs mt-2"  >
              
              <img src={sure} width="80px" alt="sure" className='mb-2' />
              <p className='my-2' > <b> {item.title} from { item.brand } </b></p>
              <p style={{ lineHeight : "1.3" , color : "rgba(0,0,0,0.85)" }} className='my-2' > { item.description } </p>
              <p className='rating mb-3' > <b>{ item.rating }⭐</b> </p>
              <p > <b style={{ fontSize : "20px" }} > ₹{ item.price*20 } </b> &nbsp; <del className="text-secondary"  >₹{ (item.price + Math.floor((item.price * item.discountPercentage ) /100) ) *20 } </del>  </p>
              <p>{ item.discountPercentage }% <span className="text-secondary" > Discount </span> </p>
              {/* <div className='mb-2'>
                <span className='btn btn-sm px-3 border border-primary' onClick={ handleClickOnMinus }  > <b> - </b> </span>
                <span className=' btn btn-sm px-3 mx-2  border' > <b>{count}</b> </span>
                <span className='btn px-3 btn-sm border border-primary' onClick={ handleClickOnPlus } > <b> + </b> </span>
              </div> */}
              <button className='btn btn-warning' type='button' onClick={handleClick} title='Add Product to your kart' > Add to Kart </button>
              <p className='mt-2' >  </p>
              {/* <button onClick={() => setClicked(false)} > Cancel </button> */}
              <p>&nbsp;{ item.stock } left </p>
              <br /><br />
          </div>
        </div>
        {/* { clicked && <LoginAlert setClicked={setClicked} /> } */}
        { hover && <ZoomImage src={ img } dimension={ dimension }  /> }
         { alertMsg.show && <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg}  /> }
         {/* <Alert  /> */}
        <button  className="cross" onClick={ () => navigate(-1) }  > Back </button>
       
    </div>
    ) : (
      <div className="mt-3 d-flex align-items-center justify-content-center" style={{ height : "450px"}} >
      <center>
          <div className="spinner-border align" role="status">
          <span className="sr-only">Loading...</span>
          </div>
        <br /> <span className='text-center' >Data is Loading...</span>
      </center>
</div>
    ) }

    </>
  )
}

export default Details;