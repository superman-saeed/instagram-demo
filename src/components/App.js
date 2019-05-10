import React from "react";
import Home from "./Home";
import User from "./User";
import Upload from "./Upload";
import Search from "./Search";
import Activity from "./Activity";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../stylesheets/app.css";

/*
  Main navigation component and routing
*/
class App extends React.Component {
  render(){
    return (
      <div className="app">
      <Router>
      <Route path="/" exact component={Home} />
       <Route path="/activity/" component={Activity} />
       <Route path="/user/" component={User} />
       <Route path="/upload/" component={Upload} />
       <Route path="/search/" component={Search} />
       <Nav />
      </Router>
      </div>
    );
  }
}
// App nav
class Nav extends React.Component{
  render(){
    return (
      <div className="nav-container">
      <div className="main-nav">
      <div> <Link to="/"><FontAwesomeIcon icon="home" size="lg" /></Link></div>
      <div> <Link to="/search"><FontAwesomeIcon icon="search" size="lg" /></Link></div>
      <div> <Link to="/upload"><FontAwesomeIcon icon="plus-square" size="lg" /></Link></div>
      <div><Link to="/activity"><FontAwesomeIcon icon="heart" size="lg" /></Link></div>
      <div><Link to="/user"><FontAwesomeIcon icon="user" size="lg" /></Link></div>
      </div>
      </div>
    );
  }
}
export default App;
