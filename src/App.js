import { Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Pages/Navbar' 
import Footer from './Pages/Footer' 
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import DisplayAllUsers from "./Pages/DisplayAllUsers";
import DisplayAllPosts from "./Pages/DisplayAllPosts";
import DisplayAllComments from "./Pages/DisplayAllComments";

function App() {
  return (
    <>
      <Navbar  />

      <div className="wrap">
        <div className="grid-container">
          <div className="main-users" >
            <Switch>
              <Route path={"/"} exact component={DisplayAllPosts} />
              {/* <Route path={"/login"} component={Login} />
              <Route path={"/register"} component={Register} /> */}
              <Route path={"/not-found"} component={NotFound} />
              <Route path={"/display-all-users"} component={DisplayAllUsers} />
              <Route path={"/display-all-posts"} component={DisplayAllPosts} />
              <Route path={"/display-all-post-comments"} component={DisplayAllComments} />
            </Switch>
          </div>  
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default App;