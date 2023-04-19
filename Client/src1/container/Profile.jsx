import { useContext, useEffect, useState } from "react";
import { alertContext, getLikeContext, kartContext, userContext } from "../Context/Context";
import { NavLink, useNavigate } from "react-router-dom";
import Registration from "./Registration";
import { userImg , kart as kartImg , ordersImg ,address , fav, vector, loginImg } from "../assests/index";
import Alert from "../Cmp/Alert";

const Profile = () => {
    const { user , setUser  } = useContext( userContext )
    const { alertMsg , setAlertMsg } = useContext(alertContext)
    const navigate = useNavigate();
    const { kart ,setKart } = useContext(kartContext);
    const [ isLoad , setIsLoad ] = useState(false);
    const [ tryLogin , setTryLogin ] = useState(true);
    const { GetLIkeCount , LikeCount , likedItems , setLikedItems , setLikeCount } =  useContext( getLikeContext )
    

    const handleClick = () => {
        localStorage.removeItem("Token")
        setUser(null);
        setLikedItems(null)
        setLikeCount(0)
        setKart({
            kartItems : null ,
            count : 0
        })
        return setAlertMsg( {show : true , msg : "Logout successfully" } )
    };

    const handleClickOnTryLogin = () => {
        window.scrollTo(0,0)
       return setTryLogin(true)
    }
    useEffect(()=>{
        window.scrollTo(0,0)
        const timeOut = setTimeout(() => {
            setIsLoad(true)
        }, 1000);

        return () => clearTimeout(timeOut)
    } ,[user] )
    return (
    <>
        <br />
        {!user ? (
            <div className="d-flex  flex-wrap justify-content-center shadow">
                
                <div className="mt-2">
              { !tryLogin ? <h6 className='p-2 text-center' >Register yourself and Setup your profile </h6> : (
                <h5 className='p-2 text-center' > Login with UserName And Password </h5>
              )  }
                 <img src={ loginImg } width="320px" alt="vector" />
                </div>
                <div className="col-md-5">
                <Registration tryLogin={tryLogin} 
                setTryLogin={setTryLogin}
                handleClickOnTryLogin={handleClickOnTryLogin} />

                </div>
            </div>
        ) : (
           <div className="container .fade-Effect pt-2"  >
                
                <div className="row mb-2" >
                     <div className="col-8 d-flex align-items-center" >
                        <img src={userImg} className="rounded border" width="40px" alt="" />
                        <p className="mb-0 ml-3 " > { user.name } </p>
                     </div>
                     <div className="col-4 d-flex align-self-center justify-content-end" >
                      <button className="btn btn-danger align-self-center" onClick={ handleClick } >Logout</button>
                    </div>
                </div>
                <hr />
                
                <div className="mb-3 h-25 orders border bg-light p-3 rounded">
                    <h5 className="text-info d-flex align-items-center" > 
                      <img src={ ordersImg } width="35px" alt={ordersImg} />
                      <span className="pl-2" > Your Orders </span>
                    </h5>
                    {/* <hr /> */}
                    <p className="mb-0 pt-1 border-top" >Looks like you dont have any Orders</p> 
                </div>
                <div className="mb-3 h-25 kart border bg-light p-3 rounded" title=" Your Kart items appear hear" >
                <h5 className="text-info d-flex align-items-center" > 
                      <img src={  kartImg } width="35px" alt="Cart" />
                      <span className="pl-2" onClick={() => navigate("/Cart")} style={{cursor : "pointer"}} > Your Kart </span>
                    </h5>
                    { kart.count !== 0 ? (
                        <p className="mb-0 pt-1 border-top" > { kart.count } produts in your kart </p>
                    ): (
                        <p className="mb-0 pt-1 border-top" >Looks like your kart is empty </p>
                    )}
                </div>
                <div className="mb-3 h-25 fav border bg-light p-3 fade-Effect rounded">
                     <h5 className="text-info d-flex align-items-center" > 
                      <img src={ fav } width="35px" alt={fav} />
                      <span className="pl-2" onClick={() => navigate("/liked")} style={{cursor : "pointer"}} > Your Favorite Items </span>
                    </h5>
                    {/* <hr /> */}

                    <p className="mb-0 pt-1 border-top" > { LikeCount !== 0 ?(
                        <> You have { LikeCount } favorite products </>
                    ): <> Looks like you dont have any Fav products </> }  </p>
                    { likedItems && (
                        <table className="table table-responsive table-hover" >
                            <thead>
                                <tr>
                                    <th> SN </th>
                                    <th> Product Name </th>
                                    <th> Category </th>
                                    <th> Price </th>
                                </tr>
                            </thead>
                            <tbody>
                                { likedItems.map((item ,i ) => (
                                    <tr key={item.id} >
                                        <th> {i+1 } </th>
                                        <td> { item.title } </td>
                                        <td>  { item.category } </td>
                                        <td> ₹{ item.price *20 }  </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="mb-3 h-25 fav border bg-light p-3 rounded" >
                     <h5 className="text-info d-flex align-items-center" > 
                      <img src={ address } width="35px" alt={address} />
                      <span className="pl-2" > Personal Infromation </span>
                    </h5>
                    {/* <hr /> */}

                    <table className="table table-hover table-responsive w-100 mb-0 "  >
                        <tbody>
                            <tr>
                            <th scope="col" > Id </th>
                            <td scope="col" >{ user._id  } </td>
                        </tr>
                        <tr>
                            <th> Name </th>
                            <td>{ user.name  } </td>
                        </tr>
                        <tr>
                            <th> Email </th>
                            <td>{ user.email  } </td>
                        </tr>
                        <tr>
                            <th> Created </th>
                            <td>{ new Date(user.date).toDateString()  } </td>
                        </tr>
                        </tbody>
                    </table>
                    {/* <p className="mb-0" > 
                     <b className="" >Id</b> <br /> { user._id  } <br />
                     <b className="" >Name</b> <br /> { user.name } <br />
                     <b className="" >Email</b> <br />  { user.email  } <br />
                     <b className="" >Created At</b> <br />  { new Date(user.date).toLocaleDateString()  } <br />
                     
                    </p> */}
                </div>
                <div className="mb-3 h-25 fav border bg-light p-3 rounded">
                     <h5 className="text-info d-flex align-items-center" > 
                      <img src={ address } width="35px" alt={address} />
                      <span className="pl-2" > Your Address </span>
                    </h5>
                    

                    <p className="mb-0 pt-1 border-top" > 
                     { user.address[0].F_place  }&nbsp;
                     zone no. { user.address[0].zone  } &nbsp;
                     { user.address[0].city  } &nbsp;
                     { user.address[0].state  } &nbsp;
                     { user.address[0].pinCode  } &nbsp;
                    </p>
                </div>



           </div>  
        )}
        { isLoad && (alertMsg.show && <Alert  alertMsg={ alertMsg }  setAlertMsg={ setAlertMsg  }  />) }
    </>
  )
}

export default Profile