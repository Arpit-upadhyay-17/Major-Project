import React, { useState , useContext, useEffect } from 'react';
import {  getLikeContext, userContext  } from "../Context/Context";
import { motion } from 'framer-motion';
import Alert from "./Alert"
import "./product.css";
import like from "../assests/heart.png";
import { useNavigate } from 'react-router-dom';

// import not_like from "../assests/not-liked.png"

const P = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const Product = ({ item , handleCLick }) => {
  
  const { user ,setUser } = useContext( userContext )
  const navigate = useNavigate();
  const [ loaded , setLoaded ] = useState(false);
  
  const [ liked , setLiked ] = useState(false);
  const { GetLIkeCount  , likedItems } = useContext(getLikeContext)
  const {  storeFavoriteProducts , removeFavoriteProducts } = useContext( userContext )
  
  const handleLoaded = () => setLoaded(true);

  
  
  const favProduct = () => {
    if( !user ){
      return handleCLick("Login to continue" )
    }
    
    if( liked ){ 
      removeFavoriteProducts(item.id).then( res => {
        setLiked(false)
        setUser( {...user , favorites : res.data.update} )
        GetLIkeCount( res.data.likedProducts);
        handleCLick("Removed from Fav")
        return;
      } )
    }else{
      storeFavoriteProducts( item.id , item.title ).then(res => {
        console.log(res);
        setLiked(true)
        setUser( {...user , favorites : res.data.update} );
        // setLikedItems( res.data.likedProducts ) 
        GetLIkeCount(res.data.likedProducts );
        handleCLick("Added to Fav")
        return;
      })
    }
    }

    useEffect(() => {
      likedItems && likedItems.map( i => {
        (i.id === item.id) && setLiked(true)
      })
    } , [likedItems ] )
    


  return (
    <>
    <motion.div  className="product"  variants={P} title={item.title} onClick={() => navigate(`/product/${item.id}`) } >
        {/* <div className="like" onClick={ favProduct } style={{ color : liked ? "red" : "grey" }}  >❤</div> */}
        <img src={ like }
          width="26px" 
          className="like" 
          onClick={ favProduct } 
          style={{ filter : liked ? "none" : "grayscale(1)" , opacity : liked ? "1" : "0.5" }}
          title={ liked ? "Remove from Fav" : "Add item to fav" }
        />
       <div className='image-div' style={{ position : "relative" }} >
         <img onLoad={handleLoaded} className="image" title={item.title} src={ item.images[0] } alt="images" />
       { !loaded &&  <center style={{position : "absolute" , left : "40%" , top : "40%"  }}  >
                  <div className="spinner-border text-secondary"  role="status">
                     <span className="sr-only">Loading...</span>
                  </div>
              </center> }
        </div>
      <br />
      <p onClick={() => navigate(`/product/${item.id}`) } className="P-title mb-0 " >{ item.title.length > 25 ? item.title.slice(0 , 25)+"..." : item.title   }</p>
      <p className='mb-0' > <b className='text-success' style={{fontFamily: "sans-serif"}} >From ₹{ item.price*20 } </b> </p>
      <span>Free Delivery</span>
    
    </motion.div>
    {/* { isClick && <Details item={item} unset={unsetDetails} /> } */}


    </>
  )
}

export default Product