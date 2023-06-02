import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Css/fruit.css'
import { wrapper } from '../App';

function Fruits() {
  const{search}=useContext(wrapper);
  
  
  const [cocktails, setCocktails] = useState([]);
  
  const [loading, setLoading] = useState(true);
  // const [searchValue, setSearchValue] = useState("");
  // const [error , setError] = useState(null);
  // const [pending , setPending] = useState(true)


  useEffect(() => {

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      // .then((res) =>{ if(!res.ok){
      //   throw Error("Could not fethch the data")
      // }res.json()}) 
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data.drinks)
        setLoading(false);
        // setPending(false);
        // setError(null);
      })



  }, [search]);
  // console.log(searchValue)

  if (loading) {
    return (
      <div className="container py-5">
        <h2>Cocktail List</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

    )



  }


  return (


    <div className="card">

      <h1>Welcome to food world</h1>
      {/* <input
        value={searchValue}

        placeholder="Search your drinks..."
        className="form-control"
        onChange={(e) => setSearchValue(e.target.value)}
      /> */}
      {cocktails &&
        <div className="row">

          {
            cocktails.map((item) => {
              const {
                idDrink,
                strDrinkThumb,
                strDrink,
                strCategory,
                strInstructions,
              } = item;
              return (
                <>


                  <div className="col-md-4 col-6 mb-3 " style={{marginTop:'20px'}}>
                    <div className="card" style={{ width: '18rem' }}>
                      <img src={strDrinkThumb} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{strDrink}</h5>
                        <span className="text-secondary">{strCategory}</span>
                        <p className="text-truncate">{strInstructions}</p>
                        <Link to={`/fruitsdetails/${idDrink}`} className="btn btn-primary">View Details</Link>
                      </div>
                    </div>
                  </div>

                </>
              );
            })
          }


        </div>
}
      </div>



  )

}

export default Fruits
