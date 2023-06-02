import { Routes , Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Fruits from "./Component/Fruits";
import About from "./Component/About";
import Moblie from "./Component/Moblie";
import Mobliedetails from "./Component/Mobliedetails";
import Fruitsdetails from "./Component/Fruitsdetails";
import { createContext, useState } from "react";
import Privteroute from "./Component/Privteroute";
import Login from "./Component/Login";

export const wrapper=createContext();

function App() {
  const[search , setSearch]=useState(" ")
  const [login,setLogin] = useState(false)
  const[logout,setLogout] = useState(false);

  return (
    <>
    <wrapper.Provider value={{search,setSearch, login,setLogin,logout,setLogout}}>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Privteroute><Fruits/></Privteroute>}></Route>
        <Route path="/fruitsdetails/:id" element={<Privteroute><Fruitsdetails/></Privteroute>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/moblie" element={<Privteroute><Moblie/></Privteroute>}></Route>
        <Route path="/mobliedetails/:id" element={<Privteroute><Mobliedetails/></Privteroute>}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
      
    </div>
    </wrapper.Provider>
    </>
  );
}

export default App;
 