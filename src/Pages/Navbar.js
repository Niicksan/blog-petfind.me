import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Route, Switch, BrowserRouter, HashRouter, Link} from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import DisplayAllUsers from './DisplayAllUsers';
import NotFound from "./NotFound";
import DisplayAllPosts from './DisplayAllPosts';
import DisplayAllComments from './DisplayAllComments';

const Navibar =() => {
    return <HashRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">PetFind.Me Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/display-all-users">Display all users</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="display-all-posts">Display all posts</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/display-all-post-comments">Display all comments</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-right">
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </HashRouter>
}

export default Navibar;