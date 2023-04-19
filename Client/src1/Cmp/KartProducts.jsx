import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { deleteImg } from "../assests";

const KartProducts = ({ item ,handleClickOnDelete ,ProductToPlace , setProductToPlace }) => {
    const navigate = useNavigate()
    const [ count , setCount  ] = useState(1)
    const [ imgLoad , setImgLoad ] = useState(false);
    const [ checked , setChecked ] = useState("")

    const handleClickOnPlus = () => {
        if( count >=3 ){
          return alert("you can add max 3 item at once ")
        }
        return setCount(count+1)
      }

      const handleClickOnMinus = () => {
        if( count > 1 ){
          return setCount(count - 1)
        }
        return alert(" Qunatity should greter than 0 ")
      }

      const handleChangeInCheckBox = (e) =>{
        if( checked === "checked" ){
           return setChecked("");
        }else{
           setChecked("checked")
           console.log(item);
           return setProductToPlace([...ProductToPlace , {
            productId : item.id,
            qunatity : count
          }])
        }
      }

  return (
    <tr>
      <td className="check-box" style={{ width: "50px" }}>
        {" "}
        <input type="checkbox" name={item.title} id="" value={checked} onChange={handleChangeInCheckBox} />{" "}
      </td>
      <td className="check-box" style={{ width: "100px" ,  position : "relative" }} >
        <img
          src={item.images[0]}
          onLoad={() => setImgLoad(true)}
          style={{ objectFit: "contain", aspectRatio: "3/2" }}
          width="100px"
          alt=""
        />

        {!imgLoad && (
          <center style={{ position : "absolute" , top : "25%" , left : "33%" }} >
          <div className="spinner-border spinner-border-sm" role="status">
             <span className="sr-only">Loading...</span>
          </div>
          <br />
          Loading...
      </center>
        )}
      </td>
      <td
        onClick={() => navigate(`/product/${item.id}`)}
        className="P-title check-box"
        style={{width: "150px"}}
      >
        {" "}
        {item.title}{" "}
      </td>

      

      <td className="check-box" style={{ width: "166px" }}>
        <span>
          <span
            className="btn btn-sm px-3 border border-primary"
            onClick={handleClickOnMinus}
          >
            <b>-</b>
          </span>
          <span className=" btn btn-sm px-3 mx-2  border">
            {" "}
            <b>{count}</b>{" "}
          </span>
          <span
            className="btn px-3 btn-sm border border-primary"
            onClick={handleClickOnPlus}
          >
            <b>+</b>
          </span>
        </span>
      </td>
      <td className="check-box" style={{width: "150px"}} >
        {" "}
        {count} * ₹{item.price*20 }
      </td>
      
      <td className="check-box" style={{width: "150px"}} >
        {" "}
        ₹{count * item.price *20}
      </td>
      <td className="check-box" style={{width: "100px"}} >
        {" "}
        <img
          src={deleteImg}
          title="Delete item from kart"
          onClick={() => handleClickOnDelete(item.id)}
          style={{ cursor: "pointer" }}
          width="25px"
          alt="delete"
        />{" "}
      </td>
    </tr>
  );
}

export default KartProducts;