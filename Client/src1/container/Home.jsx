import React , { useContext, useState ,useEffect } from 'react';
import { alertContext, productsContext } from '../Context/Context';
import Products from './Products'
import Carousel from '../Cmp/Carousel';
import Recommend from '../Cmp/Recommend';
import "../styles/Home.css";
import basket from "../assests/basket.png"; 
import Search from '../Cmp/Search';
import Alert from '../Cmp/Alert';


const Home = () => {
  const products = useContext(productsContext);
  const { alertMsg , setAlertMsg } = useContext( alertContext );
  // const [ timer , setTimer ] = useState(0)
  


  useEffect(() => {
    document.title = "Home Page";
    // const alertTimer = setTimeout( () => {
    //   setAlertMsg({ show : true , msg : "Login to your account...!"  })
    // } , 10 * 1000)

    // return () => {
    //   clearTimeout( alertTimer )
    // }
  } , [] )


 



  return (
    <div className='Home mt-3'  >
      <center className='pt-2 mb-2' >
      
        <div className='container my-1' >
        <h5 className='text-warning' > E-mart.com </h5>
        <p className='px-2 text-justify' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.enda aspernatur quia ut corporis natus, pariatur consectetur, earum ullam, et obcaecati temporibus perspiciatis quas ex magni? Tempore dicta ipsam ipsa consequuntur explicabo atque.
        </p> <br />
        <Search />
        <Recommend />
        {/* <Carousel /> */}
        
        </div>
        
      <div className="text-center shadow-sm p-2 m-1 bg-darkk" >
         {/* <hr /> */}
        <h6 className='pl-2 d-flex align-items-center justify-content-center ' style={{ gap : "10px" }} >
          <img src={basket} width="25px" alt="basket" />
          Top Products
        </h6>
      </div>
      </center>
      <Products products={ products } />
      <div className='d-flex align-items-center' style={ { height : "100vh" } } >
      <Carousel />
      </div>
     { alertMsg.show &&  <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} /> }
    </div>
  )
}

export default Home