import { Routes , Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Fruits from "./Component/Fruits";
import About from "./Component/About";
import Moblie from "./Component/Moblie";
import Mobliedetails from "./Component/Mobliedetails";
import Fruitsdetails from "./Component/Fruitsdetails";
import { createContext, useState } from "react";

export const wrapper=createContext();

function App() {
  const[search , setSearch]=useState("apple")

  return (
    <>
    <wrapper.Provider value={{search,setSearch}}>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Fruits/>}></Route>
        <Route path="/fruitsdetails/:id" element={<Fruitsdetails/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/moblie" element={<Moblie/>}></Route>
        <Route path="/mobliedetails/:id" element={<Mobliedetails/>}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
      
    </div>
    </wrapper.Provider>
    </>
  );
}

export default App;
 