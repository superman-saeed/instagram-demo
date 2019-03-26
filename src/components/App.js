import React from "react";
import Home from "./Home";
import User from "./User";
import Upload from "./Upload";
import Search from "./Search";
import Activity from "./Activity";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Icon} from "semantic-ui-react";
import "../stylesheets/app.css";

class App extends React.Component {
  render(){
    return (
      <div>
      <Router>
      <Nav />
      <Route path="/" exact component={Home} />
       <Route path="/activity/" component={Activity} />
       <Route path="/user/" component={User} />
       <Route path="/upload/" component={Upload} />
       <Route path="/search/" component={Search} />
      </Router>
      </div>
    );
  }
}
class Nav extends React.Component{
  render(){
    return (
      <div className="nav-container">
      <div className="main-nav">
      <div> <Link to="/"><Icon name="home" size="large"  size="large"/></Link></div>
      <div> <Link to="/search"><Icon name="search" size="large"  size="large"/></Link></div>
      <div> <Link to="/upload"><Icon name="plus square" size="large"  size="large"/></Link></div>
      <div><Link to="/activity"><Icon name="like" size="large"  size="large"/></Link></div>
      <div><Link to="/user"><Icon name="user" size="large"  size="large"/></Link></div>
      </div>
      </div>
    );
  }
}
export default App;
