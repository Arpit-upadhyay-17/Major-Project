import React, { useContext } from 'react';
import { NavLink  } from 'react-router-dom';
import { categoriesContext } from '../Context/Context';

const Categories = ({handleClick}) => {
    const categories = useContext(categoriesContext);
  


    

    return (
    < >
        {
            categories ?  categories.map((category , i) => {
                return (
              
                        <NavLink key={i} to={`${category.category}`}  onClick={handleClick} > { category.category.toUpperCase()  } </ NavLink>
                 
                )
            }): <> loading categoires </>
        }
    </>
  )
}

export default Categories;