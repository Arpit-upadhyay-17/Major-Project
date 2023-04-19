import { useContext, useEffect, useState } from "react";
import { alertContext, kartContext, userContext } from "../Context/Context";
import { back, kart as karTImg } from "../assests";
import Alert from "../Cmp/Alert";
import KartProducts from "../Cmp/KartProducts";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  const { removeKartProducts , kart , GetKart } = useContext( kartContext );
  const { alertMsg , setAlertMsg } = useContext( alertContext );
  const [ ProductToPlace , setProductToPlace ] = useState([]) 

  

  const handleClickOnDelete = (id) => {
    console.log(id);

    // return console.log(removeKartProducts(id));
     removeKartProducts(id).then((result) => {
      if( result.data.update ){
        console.log(result);
        GetKart( result.data.CartProducts )
        return setAlertMsg( { show : true  , msg : result.data.msg} )
      }
     return console.log(result);
    }).catch((err) => {
      return setAlertMsg( { show : true  , msg : "error while updating the kart" } )
     });
  }


 

  useEffect(() => {
    document.title = `Kart (${ kart.count }) `
    // (kart.kartItems === null ) && GetKart()
  } , [] )

  useEffect(() => {
    console.log(ProductToPlace);
    console.log(kart.kartItems);
  } , [ ProductToPlace ] )

  
  return (
    <div className="kart fade-Effect mt-3">
      <div className="p-3">
        <h5 className="text-info d-flex align-items-center justify-content-center border-bottom pb-3 border-warning ">
          <img src={karTImg} width="35px" alt={karTImg} />
          <span className="pl-2"> Cart </span>
        </h5>
        <img src={back} width="35px" title="Back" alt="back" className="btn-back" onClick={() => navigate(-1)} />
        <div className="my-3">
          {kart.kartItems ? (
            <div className="table-responsive-md border " >
              {/* <span>  </span> <br /> */}
              <table className="table table align-middle caption-top">
                <caption>Your kart has {kart.count} products</caption>
                <thead className="text-light rounded" style={{ background : "#007bff" }} >
                  <tr className="text-center" >
                    <th style={{width : "50px !important"  }} >Select</th>
                    <th>Image</th>
                    <th> Item </th>
                    <th> Quantity </th>
                    <th> Price </th>
                    <th> Total </th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="text-center" >
                  {kart.kartItems.map((item, i) => <KartProducts key={i} ProductToPlace={ProductToPlace} setProductToPlace={setProductToPlace} item={item} handleClickOnDelete={handleClickOnDelete} />  )}
                </tbody>
                 <tfoot >
                  <tr>
                    <td>  </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tfoot>
                
              </table>
            </ div >
          ) : (
            <> your kart has {kart.count} items </>
          )}
        </div>
      </div>

      { alertMsg.show && <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} /> }
    </div>
  );
}

export default Cart;