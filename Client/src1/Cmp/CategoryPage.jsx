import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { specificCategoryContext } from '../Context/Context';
import Products from '../container/Products';



const CategoryPage = () => {
  const [ isLoaded , setIsLoaded ] = useState(false);
  // const [ showCategories , setshowCategories ] = useState(false
  const P = useContext(specificCategoryContext)
  // const S = useContext(searchContext);
  const [ data , setData ] = useState(null)
  const { category } = useParams();


  
 



  useEffect(() => {
    
    setIsLoaded(false)
    P.specificCategory(category || "smartphones" ).then((result) => {
      setData( result )
      setIsLoaded(true)
  }).catch((err) => {
    alert(err)
    console.log(err);
  });

     return () => {
       console.log("Compnonent Unmounted" );
    }
  } , [category] )

  // useEffect(() => {
  //   document.title = `Categories Page`
  //   P.specificCategoryProducts && setData(P.specificCategoryProducts) 
  // } , [P])


 
  return (
    <> 
    <div  className='ProductDetails mt-2' id='abcdefgh' >
    {/* <hr /> */}
    <div className="alert alert-warning" role="alert">
          <div className='ProductDetails-heading  mb-0'>
            Showing results for 
            <span className='border border-warning' >
              { !isLoaded ? ( 
                 <center >
                 <div className="spinner-border spinner-border-sm" role="status">
                    <span className="sr-only">Loading...</span>
                 </div>
                   &nbsp;Loading...
             </center>
            ) : (
              category || <>Smartphones</>
            )
          }
              {/* { category || <>Smartphones</> } */}
            </span>
          </div> 
    </div>
          {/* <hr />  */}
        <div className='products' >
          { data ? 
            <Products products={data} />
            :(
              <center className="mt-3" >
                  <br />
                  <div className="spinner-border" role="status">
                     <span className="sr-only">Loading...</span>
                  </div>
                  <br /> 
                  <span>
                    Data is Loading...
                  </span>
              </center>
            )}
        </div>
     </div>
     </>
  )
}

export default CategoryPage;