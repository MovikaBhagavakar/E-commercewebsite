import React, { useEffect, useState } from 'react'
import { moblie } from '../Files/moblie'
import {Link,  Navigate, useNavigate} from "react-router-dom"
// import { useContext } from 'react';


function Moblie() {
    // const{search,setSearch}=useContext()
    const [moblieDetail, setMoblieDetail] =useState(moblie);
    const[list , setList]=useState(moblie);
    const [search, setSearch] = useState()

    useEffect(()=>{
        const find= list.filter((item)=>{
            return(
                item.Name.toLowerCase().includes(search)
            );
           
        });
        setMoblieDetail(find)
    }, [search]);
    const nav= useNavigate();
  return (

    <div className="fruit">
          <h1>Moblie Details</h1>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Enter your text" className="From-control"></input>

        {
            moblieDetail.map((item) => {
                const{id,Name} = item;
                return(
                    <>
                  
                   
                    <div className="card">
                        <div className="card-body">
                            <h1>details{id}</h1>
                            <h1>{Name}</h1>
                        <button onClick={()=>nav(`/mobliedetails/${id}`, {state:'hello world'})}>View details</button>
                            {/* <Link to={`/mobliedetails/${id}`}>view Details</Link> */}
                        </div>
                    </div>
                    </>
                )
            })
        }
      
    </div>
  )
}

export default Moblie
