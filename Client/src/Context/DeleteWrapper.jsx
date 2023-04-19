import axios from "axios";
import { deleteContext } from "./Context";


const DeleteWrapper = ({ children }) => {
 
    const deleteUser = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        axios.post("http://localhost:5000/api/" 
        , {id} )
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

 
 
    return (
        <deleteContext.Provider value={deleteUser} >
            { children }
        </deleteContext.Provider>
    )
}

export default DeleteWrapper;