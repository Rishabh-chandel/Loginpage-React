import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const[islogin , setlogin] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar islogin={islogin} setlogin={setlogin} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setlogin={setlogin} />}/>
        <Route path="/signup" element={<Signup setlogin={setlogin} />}/>
        <Route path="/dashboard" element={
          <PrivateRoute islogin={islogin}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
