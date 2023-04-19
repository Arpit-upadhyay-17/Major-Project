import React, { useContext, useEffect, useState } from 'react';
import { getLikeContext, productsContext } from '../Context/Context';
import { AnimatePresence , motion } from 'framer-motion';
import Product from "./Product"
import Products from '../container/Products';
import { useNavigate } from 'react-router-dom';
import { back } from '../assests';
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
 


const LikedProducts = () => {
    const L = useContext(getLikeContext)
    const navigate = useNavigate()
    const products = useContext(productsContext);

    useEffect( () => {
        document.title = `(${L.LikeCount}) favorite Products`;
        console.log( L );
    }, [L] )


    return (
        <div>
            <br />
            
             <div className='container d-flex align-items-center' >
             <img src={back} width="35px" title="Back" alt="back" className="btn-back" onClick={() => navigate(-1)} />
                 <h5 className='mx-2 mb-0' >List of Liked items</h5>
                </div>
            <hr />
            <AnimatePresence >
                <motion.div className='' variants={container} initial="hidden" animate="visible" >
                    {
                        L.likedItems ? <Products products={L.likedItems} /> :(
                           <center>
                            <span style={{fontSize : "15px"}} > Some error occur while loading the products 😢 <br /> Try reloading the page <br /> or <br /> Login again  </span>
                           </center>
                        )
                    }
                    {/* { items.length === 0 && <>You have not any Favorite product</> } */}
                    {/* { items.length === 0 && L.likedItems.map((i , j ) =>  <li key={j} > {i} </li> ) } */}
                    <center style={{fontSize : "25px"}} >
                    { L.likedItems === null && L.LikeCount === 0 ? <>😢 No Liked product</>
                    :(
                        <> 
                            <br />
                            Fav product Count {L.LikeCount} 
                            
                         </>
                    ) }
                    </center>
                </motion.div>
            </AnimatePresence>
            <br />
        </div>
  )
}

export default LikedProducts