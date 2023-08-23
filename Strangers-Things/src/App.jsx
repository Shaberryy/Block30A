import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compenents/NavBar";
import Login from "./compenents/Login";
import HomePage from "./compenents/Homepage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      
        {/* <Link to="/Login">Login</Link> */}
  
        <Navbar />
      
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
