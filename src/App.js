import React from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Pages/Navbar' 
import Footer from './Pages/Footer' 
import DisplayAllPosts from "./Pages/DisplayAllPosts";

function App() {
  return (
    <>
      <Navbar  />
      
      <DisplayAllPosts />

      <Footer />
    </>
  );
}

export default App;