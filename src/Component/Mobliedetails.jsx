import React, { useEffect, useState } from 'react'
import { moblie } from '../Files/moblie'
import { useLocation, useParams } from 'react-router-dom'

function Mobliedetails() {
    const [details ,setDetails]=useState({})
    
    const {id}=useParams();
    // console.log('id',id);
   
    
        useEffect(()=>{
            const finditem=moblie.find((item)=>item.id=== Number(id))
            setDetails(finditem)
          
        },[]);

        const {state}=useLocation();

        console.log('details',details)
       
  return (
    <div>
      <h1>Welcom Product{id}</h1>
      <div className="card">
        <div className="card-body">
          <h1>{state}</h1>
            <h1>{details.Name}</h1>
            <p>{details.description}</p>
        </div>
      </div>
      
      

    </div>
  )
}

export default Mobliedetails
