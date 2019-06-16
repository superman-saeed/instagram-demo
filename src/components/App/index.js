import React from "react";
import Home from "../Home";
import User from "../UserProfile";
import Upload from "../Upload";
import Search from "../Search";
import Activity from "../Activity";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Routes from "../../constants/routes";


/*
  Main navigation component and routing
*/
class App extends React.Component {
  render(){
    return (
      <div className="app">
      <Router>
      <Route path={Routes.LANDING} exact component={Home} />
       <Route path={Routes.ACTIVITY} component={Activity} />
       <Route path={Routes.USER} component={User} />
       <Route path="/upload/" component={Upload} />
       <Route path={Routes.SEARCH} component={Search} />
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
      <div> <Link to={Routes.LANDING}><FontAwesomeIcon icon="home" size="lg" /></Link></div>
      <div> <Link to={Routes.SEARCH}><FontAwesomeIcon icon="search" size="lg" /></Link></div>
      <div> <Link to="/upload"><FontAwesomeIcon icon="plus-square" size="lg" /></Link></div>
      <div><Link to={Routes.ACTIVITY}><FontAwesomeIcon icon="heart" size="lg" /></Link></div>
      <div><Link to={Routes.USER}><FontAwesomeIcon icon="user" size="lg" /></Link></div>
      </div>
      </div>
    );
  }
}
export default App;
