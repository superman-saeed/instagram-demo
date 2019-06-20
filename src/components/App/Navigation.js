import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import * as Routes from "../../constants/routes";

// App nav
class Nav extends React.Component{
  render(){
    return (
      <div className="nav-container">
      <div className="main-nav">
      <div> <Link to={Routes.LANDING}><FontAwesomeIcon icon="home" size="lg" /></Link></div>

      <div> <Link to={Routes.SEARCH}><FontAwesomeIcon icon="search" size="lg" /></Link></div>

      <div> <Link to={Routes.UPLOAD}><FontAwesomeIcon icon="plus-square" size="lg" /></Link></div>

      <div><Link to={Routes.ACTIVITY}><FontAwesomeIcon icon="heart" size="lg" /></Link></div>

      <div><Link to={`${Routes.USER}/default`}><FontAwesomeIcon icon="user" size="lg" /></Link></div>

      </div>
      </div>
    );
  }
}
export default Nav;
