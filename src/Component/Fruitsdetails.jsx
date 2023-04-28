import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


function Fruitsdetails() {
  const  {id }= useParams()
    const[deatils , setDetails]=useState({})
    const[isload , setIsLoad] = useState(true);
 
    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>
         
          res.json())
        .then((data)=>{
       
          setDetails(data.drinks[0]);
          setIsLoad(false);
        })
        
    }, []);

    if(isload){
      return(
        
        <h1>Loading...</h1>

      )
      
    }
  return (


    <>
       
     <div className="row py-5">
        <div className="col-md-4">
          <img src={deatils.strDrinkThumb} width="100%" alt="" />
        </div>
        <div className="col-md-8">
          <h2>Drink name: {deatils.strDrink}</h2>
          <p> Category : {deatils.strCategory} </p>
          <p> Details: {deatils.strInstructions} </p>
        </div>
      </div>
    </>
  )
}

export default Fruitsdetails
