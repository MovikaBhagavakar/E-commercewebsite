import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
// import { wrapper } from '../App' 

function Navbar() {
  // const [search , setSearch]=useState("")
  // const {setSearch, search} = useContext(wrapper);

  return (
    <div>
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to=" ">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/product">Fruits</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/moblie">Moblie Details</NavLink>
          </li>
         
        </ul>
        <div>
        {/* <input
        value={search}

        placeholder="Search your drinks..."
        className="form-control"
        onChange={(e) => setSearch(e.target.value)}
      /> */}
        </div>
      </div>
    </div>
  </nav>
</div>

      
    
  )
}

export default Navbar
