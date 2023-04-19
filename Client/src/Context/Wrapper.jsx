import axios from "axios";
import React, { useEffect, useState  } from "react";
import { userContext , deleteContext , addUserContext , updateContext} from "./Context";


const Wrapper = ({children}) => {
    const [ userData , setUserData ] = useState();
    const [ isUpdated , setIsupdated ] = useState();
    const [ isDeleted , setIsDeleted ] = useState(false);
    const [ isUserAdded , setIsUserAdded ] = useState(false);
    // const history = useHistory()
    useEffect( () => {
        axios.get("http://localhost:5000/api/all-users")
        .then(  (res) => {
            const data =  res.data.data
            console.log(data);
            res.status === 200 ? setUserData(data) : alert("some problem occur in server")
        } )
        .catch(err => {
            return alert("error")
        })
    } , [isDeleted , isUpdated , isUserAdded])

    const deleteUser = (e) => {
        e.preventDefault();
        setIsDeleted(false)
        const id = e.target.id.value;
        axios.get(`http://localhost:5000/api/deleteUser/${id}`)
        .then(res => {
            if(res.request.status === 200) {
                alert(res.data.msg);
                 setIsDeleted(true)
                //   return history.push("/users");
            }
        })
        .catch(err => {
            console.log(err.message);
            return;
        })

        e.target.reset();
    }

    const addUser = (e) => {
        e.preventDefault();
        setIsUserAdded(false);
        let name = e.target.name.value;
        let email = e.target.email.value;
        let add = e.target.add.value;
        let img = e.target.img.value;
        let pass = e.target.pass.value
        // formData.append("name" , name)
        // formData.append("email" , email)
        // formData.append("add" , add)
        // formData.append("img" , img)
        // formData.append("pass" , pass)

        axios.post("http://localhost:5000/api/signup",
        { name , email , add , img , pass }
        ).then(res => {
            if( res.request.status === 200 ){
                setIsUserAdded(true)
                alert( res.data.msg )
            }
        })
        .catch(err => {
           return alert(err.message);
        })
        return;
    }

    const updateuser = (e) => {
        e.preventDefault();
        setIsupdated(false)
        let id = e.target.id.value;
        let name = e.target.name.value;
        
        axios.post(`http://localhost:5000/api/updateUser/${id}` ,
        { name })
        .then(res => {
            
            if(res.request.status !== 200 ){
                return alert("error")
            }
            setIsupdated(true)
            console.log(res);
           return alert(res.data.msg)
        })
        .catch(err => {
            return alert(err.message)
        })
    
    }

    return (
        <userContext.Provider value={userData} >
            <deleteContext.Provider value={ deleteUser }>
               <addUserContext.Provider value={addUser} >
                   <updateContext.Provider value={updateuser} >
                        { children }
                   </updateContext.Provider>
               </addUserContext.Provider>
            </deleteContext.Provider>
        </userContext.Provider>
    )
}

export default Wrapper;