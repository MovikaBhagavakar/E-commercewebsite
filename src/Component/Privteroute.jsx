import React, { useContext } from 'react'
import { wrapper } from '../App'
import { Navigate } from 'react-router-dom'

function Privteroute( {children}) {
    console.log("childern", children)
    const {login}=useContext(wrapper)

    if(login){
        return children
    }


  return (
    
    <div>
        <Navigate to="/login">Please login</Navigate>
        
      
    </div>
  )
}

export default Privteroute
