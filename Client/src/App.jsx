import React from "react";
import { Routes , Route } from "react-router-dom";
import Update from "./cmp/Update";
import Navbar from "./cmp/Navbar";
import Edit from "./cmp/Edit"
import Users from "./cmp/Users";
import Delete from "./cmp/Delete";
import Adduser from "./cmp/Adduser"
import Wrapper from "./Context/Wrapper"
import DeleteWrapper from "./Context/DeleteWrapper"
const App = () => {
    return (
        <>
            <Wrapper>
                <Navbar />
                <hr />
                <Routes>
                    <Route path="/User" element={ <Users />  }  />
                    <Route path="/edit" element={ <Edit />  } >
                        <Route path="Update" element={ <Update /> } />
                        <Route path="Delete" element={ <Delete /> } />
                        <Route path="Add" element={ <Adduser /> } />
                        {/* <Route path="update" element={ <Update /> } /> */}
                    </Route>
                </Routes>
            </Wrapper>
            
        </>
    )
}


export default App;