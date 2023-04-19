import React, { useContext } from 'react'
import { updateContext } from '../Context/Context';


const Update = () => {
  const updateUser = useContext( updateContext );

  return (
    <div>
      <form onSubmit={updateUser} >
        <input type="text" placeholder='Id' name='id' />
          <input type="text" placeholder='name' name='name'  />
        <button type='submit' > delete </button>
      </form>
    </div>
  )
}

export default Update;