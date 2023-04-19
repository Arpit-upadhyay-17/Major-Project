import { useContext } from "react"
import Product from '../Cmp/Product';
import { alertContext } from '../Context/Context';
import Alert from "../Cmp/Alert";
import "./index.css";

const Products = ({products}) => {
  const { alertMsg , setAlertMsg } = useContext( alertContext );
  const handleCLick = ( msg ) => {
    return setAlertMsg({ show : true , msg   })
  }
  
  
  return (
    <div className='products' >
      { products ? products.slice(0,30).map(item  => <Product key={item.id} handleCLick={handleCLick} item={item} />)  
      : <>loading</> }
      { alertMsg.show && <Alert alertMsg={alertMsg}  setAlertMsg={setAlertMsg} /> }
    </div>
  )
}

export default Products;