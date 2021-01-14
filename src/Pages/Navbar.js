import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, NavDropdown, Button} from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Login from './Login'
import DisplayAllUsers from './DisplayAllUsers';
import DisplayAllPosts from './DisplayAllPosts';
import DisplayAllComments from './DisplayAllComments';
import Register from './Register'
import '../App.css';
import '../index.css';

const Navibar =() => {
    return <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">PetFind.Me Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/display-all-users">Display all users</NavDropdown.Item>
              <NavDropdown.Item href="/display-all-posts">Display all posts</NavDropdown.Item>
              <NavDropdown.Item href="/display-all-post-comments">Display all comments</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-right">
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/display-all-users" name="displayAllusers" component={DisplayAllUsers} />
        <Route path="/display-all-posts" name="displayAllPosts" component={DisplayAllPosts} />
        <Route path="/display-all-post-comments" name="displayAllComments" component={DisplayAllComments} />
    </Router>;
    
}

export default Navibar;