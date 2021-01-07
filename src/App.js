import React from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Pages/Navbar' 
import DisplayAllUsers from "./Pages/DisplayAllUsers";

function App() {
  return (
    <>
      <Navbar  />
      <div class="wrap">
        <div class="grid-container">
          <DisplayAllUsers />
        </div>
      </div>
    </>
  );
}

export default App;