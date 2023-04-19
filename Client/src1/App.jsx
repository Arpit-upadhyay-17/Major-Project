import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Category , Home , NotFound , SearchPage , Profile ,Cart } from "./container/Index"
import { LikedProducts , CategoryPage , Navbar , Footer , Loader , Details } from "./Cmp/index"
import { userImg } from './assests';
import Wrapper from './Context/Wrapper';
import ServerWrapper from './Context/ServerWrapper';
import About from './container/About';



const App = () => {
  const [ isloaded , setisloaded ] = useState(false);

  useEffect(() => {
    let Timeout = setTimeout(() => {
     setisloaded(true)
    }, 2000 )
    
    return () => {
     clearTimeout(Timeout)
    }
   } , [] )

  
  return (
    <div className="parent"  >
    <Wrapper>
        <ServerWrapper>
            <Navbar />
          <br />
          <br />
      
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/Profile' element={ <Profile /> } />
            <Route path='/Liked' element={ <LikedProducts /> }  />
            <Route path='/Cart' element={ <Cart /> }  />
            <Route path='/About-us' element={ <About /> }  />
            <Route path='/product/:id' element={ <Details /> } />
            <Route path='/category' element={ <Category /> } >
                <Route index element={ <CategoryPage  /> } />
                <Route path=':category' element={ <CategoryPage /> } />
            </Route>
            <Route path='/search' element={ <SearchPage /> } />
            <Route path='/*' element={ <NotFound /> } />
          </Routes>
          <Footer />
          {/* <center className='fixed-bottom'>
            <button  > <img src={userImg} className="border" style={{ padding : "2px" ,borderRadius : "20px"  }}  width="35px" alt="" /> </button>
          </center> */}
          { !isloaded && <Loader /> }
          
        </ServerWrapper>
    </Wrapper>
    </div>
  )
}

export default App