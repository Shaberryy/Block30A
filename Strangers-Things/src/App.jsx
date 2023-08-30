// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import HomePage from "./components/Homepage";
import AllPosts from "./components/AllPosts";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Link to="/Login">Login</Link> */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<HomePage/>}/>
          <Route path="/AllPosts" element={<AllPosts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
