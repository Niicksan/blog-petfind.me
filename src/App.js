import React from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Pages/Navbar' 
import Footer from './Pages/Footer' 
import DisplayAllPosts from "./Pages/DisplayAllPosts";
import DisplayAllComments from "./Pages/DisplayAllComments";


function App() {
  return (
    <>
      <Navbar  />
      
      <DisplayAllComments />

      <Footer />
    </>
  );
}

export default App;