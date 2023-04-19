import React, { useState , useEffect, useContext } from 'react';
import { loginSingupContext , userContext , getLikeContext, productsContext , kartContext , alertContext } from './Context';
import { server } from '../Apis/Apis';
import Alert from '../Cmp/Alert';

const ServerWrapper = ({ children }) => {
    const [ user , setUser ] = useState() ;
    const [ isAlert , setIsAlert  ] = useState(false);
    const [ alertMsg , setAlertMsg ] = useState({ show : false , msg : null })
    const [ likedItems , setLikedItems ] = useState( null );
    const [ LikeCount , setLikeCount ] = useState(  0 );
    const [ kart , setKart ] = useState({
        kartItems : null ,
        count : 0
    })
    const products = useContext( productsContext )
    const [ isLoad , setIsload ] = useState(true)

    const handleLogin = async ( data ) => {
            const response = await server.post("/login" , data , {
                headers : {
                    authorization : localStorage.getItem("Token")
                }
            } )
            return response.data;
    }

    const handleSignup = async ( data ) => {
            const response = await server.post("/signup" , data )
            return response.data;
    }

    const GetLIkeCount =  async ( items ) => {
        console.log(items);
       if( items !== null &&  items.length > 0 ){   
        setLikedItems( items )
        return setLikeCount( items.length );
       } else{
        setIsload(false)
        setLikedItems( null )
        return setLikeCount( 0 );
       }
    }

    const validateToken = async (token) => { 
        if(token){
            try {
                const response = await server.get("/auth" ,{
                    headers : {
                        authorization  : token
                    }
                })
                console.log(response);
                if( response.data ){
                    console.log(response.data );
                    setUser( response.data.Data )
                    GetLIkeCount(response.data.likedProducts)
                    GetKart( response.data.CartProducts )
                    if( !response.data.login ) {
                        // return setAlertMsg({ show : true  , msg : response.data.msg })
                        return console.log({ show : true  , msg : response.data.msg })
                    }

                    return setAlertMsg({ show : true  , msg : response.data.msg })
                    // return setAlertMsg({ show : true  , msg : response.data })
                }
                
               return console.log(response.data);
                
            } catch (error) {
                // console.log(error.message);
                return alert( error.response.data.login )
            }
        }
        else{
            return console.log("you need to login...");
        }
    }


    const GetKart =  async ( items ) => {
        console.log(items);
       if( items !== null &&  items.length > 0 ){    

        return setKart({ kartItems : items , count : items.length   })        
       } else{
        return setKart({ kartItems : null , count : 0   })
       }
    }


    const storeFavoriteProducts = async ( productId , productName ) => {
        try {
            const response = await server.post("/addFav" , { id :  user._id , productId , productName  })
            return response;
        } catch (error) {
           return alert(error)
        }
    }

    const removeFavoriteProducts = async ( productId ) => {
        try {
            const response = await server.post("/removeFav" , { id :  user._id  , productId })
            return response;
        } catch (error) {
           return alert(error)
        }
    }

    const storeKartProducts = async ( productId ) => {
        try {
            const response = await server.post("/getKart" , { id :  user._id , productId })
            return response;
        } catch (error) {
           return alert(error);
        }
    }

    const removeKartProducts = async ( productId ) => {
        try {
            const response = await server.post("/updateKart" , { id :  user._id  , productId })
            return response;
        } catch (error) {
           return alert(error)
        }
    }


    useEffect(() => {
        validateToken(localStorage.getItem("Token"))
    } , [] )

    // useEffect(() => {
    //    let  timemout;
    // //    console.log("Runnnn");
    //     if( !isLoad ){
    //         timemout = setTimeout(() => {
    //             GetLIkeCount(user.favorites)
                
    //             // console.log("Runnnn");
    //             setIsload(true)
    //         } , 2000 )
    //     } 

    //     return () => {
    //         clearTimeout(timemout)
    //     }
    // } , [products] )
 
    
    return (
        <loginSingupContext.Provider value={ { handleLogin , handleSignup , validateToken } } >
           <userContext.Provider value={ { user , setUser , storeFavoriteProducts , removeFavoriteProducts } } >
                <getLikeContext.Provider value={{ GetLIkeCount , LikeCount , likedItems , setLikedItems ,setLikeCount }} >
                    <kartContext.Provider value={{storeKartProducts , removeKartProducts , GetKart , kart , setKart }} >
                        <alertContext.Provider value = { {alertMsg , setAlertMsg} } >
                            { children }
                        </alertContext.Provider>
                    </kartContext.Provider>
                </getLikeContext.Provider>
            </userContext.Provider>
        </loginSingupContext.Provider>
    )
}

export default ServerWrapper;