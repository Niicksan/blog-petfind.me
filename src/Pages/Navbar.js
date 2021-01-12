import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, NavDropdown, Button} from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login'
import DisplayAllUsers from './DisplayAllUsers';
import DisplayAllPosts from './DisplayAllPosts';
import NotFound from './NotFound'
import Register from './Register'
import Dashboard from './Dashboard'
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
            <Nav.Link href="#home">
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/display-all-users">Display all users</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-right">
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/display-all-users" component={DisplayAllUsers} />
        <Route component={NotFound} />
      </Switch>
    </Router>;
}

export default Navibar;