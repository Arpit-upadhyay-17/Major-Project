import React , { useEffect, useState } from 'react';
import { useNavigate , useSearchParams} from 'react-router-dom';
import { Dummyjson, server } from "../Apis/Apis";
import { productsContext , categoriesContext , getSingleProduct, specificCategoryContext , searchContext , getLikeContext } from './Context';

const Wrapper = ({children}) => {
    
    const [ products , setProducts ] = useState();
    const [ categories , setCategories ] = useState();
    const [ IsSearching , setIsSearching ] = useState(false)
    const [ specificCategoryProducts , setspecificCategoryProducs ] = useState();
    const [ SearchResult , setSearchResult ] = useState(null);
    
    const [ SearchParams ] = useSearchParams()
    const navigate = useNavigate();
    const getData = async () => {
        await server.get("/products" , { params : { limit : 100 } } )
        .then( res => {
           return setProducts(res.data.products)
            // return console.log(res.data.products) 
        })
    
    }

    const getCategory = () => {
        server.get("/categories" , { params : { limit : 20 } } )
        .then(res => {
            // console.log(res);
           return setCategories(res.data)
        })
    }

    const specificCategory = async(category) => {
       
       try {
            const res = await server.get(`/categories/${category}`)
            // console.log(res);
            return res.data.products
       } catch (error) {
            return alert(error)
       }
    }

    const searchProducts = async (search) => {
        let searchItems = search || SearchParams.get("Search")
        try {
         const res = await Dummyjson.get(`/search?q=${searchItems }`);

         if(res.request.status === 200){
            if(res.data.products.length !== 0 ){
                // console.log("a :" , res.data.products);
                setSearchResult(res.data.products);
                setIsSearching(false)
                return navigate(`/search?search=${searchItems}`)
            }else{
                setIsSearching(false)
                alert(`No Results match for search ${searchItems}`);
                // console.log("you will be redirected to home page");
                return navigate("/");
            } 
        }

        } catch (err) {
            return alert(err.message);
        }
    }

    const getProduct = async ( id ) => {
        try {
            const res = await server.get(`products/${id}`)
            if(res.request.status === 200){
                return res.data;
            }
            return console.log(res);
        } catch (error) {
           return alert(error.message)
        }
    }

    

    useEffect(() => {
        getData();
        // console.log("checking.......");
        getCategory()
    } , [] )


  
    return (
    <productsContext.Provider value={products} >
        <categoriesContext.Provider value={ categories } >
            <specificCategoryContext.Provider value={ {specificCategory , specificCategoryProducts } } >
               <searchContext.Provider value={{ searchProducts , SearchResult , IsSearching , setIsSearching } } >
                     
                        <getSingleProduct.Provider value={getProduct} > 
                            { children }
                        </getSingleProduct.Provider>
                    
               </searchContext.Provider>
            </specificCategoryContext.Provider>
        </categoriesContext.Provider>
    </productsContext.Provider>
  )
}

export default Wrapper