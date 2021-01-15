import React from "react";
import { Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Pages/Navbar' 
import Footer from './Pages/Footer' 
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import DisplayAllUsers from "./Pages/DisplayAllUsers";
import DisplayAllPosts from "./Pages/DisplayAllPosts";
import DisplayAllComments from "./Pages/DisplayAllComments";

function App() {
  return (
    <>
      <Navbar  />
      
      <Switch>
        <Route path={"/"} exact component={DisplayAllPosts} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
        <Route path={"/not-found"} component={NotFound} />
        <Route path={"/display-all-users"} component={DisplayAllUsers} />
        <Route path={"/display-all-posts"} component={DisplayAllPosts} />
        <Route path={"/display-all-post-comments"} component={DisplayAllComments} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;