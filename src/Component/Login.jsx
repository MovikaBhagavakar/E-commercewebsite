import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { wrapper } from '../App'

function Login() {
    const{setLogin}=useContext(wrapper);
    const navigate=useNavigate();

    function login(){
        setLogin(true)
        navigate("/")
    }
  return (
    <div>
        <h1>LOG in</h1>
        <button to="/" onClick={login}>Login</button>
      
    </div>
  )
}

export default Login
