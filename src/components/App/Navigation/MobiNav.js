import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {
  HOME,
  EXPLORE,
  ACTIVITY,
  USER} from "../../../constants/routes.js"


const MobiNav=()=>{
  const state = useSelector(({navigation})=>navigation),
  homeIcon = state.home ? "home-icon-solid ":"home-icon-outl ",
  exploreIcon = state.explore ? "explore-icon-solid ":"explore-icon-outl ",
  heartIcon = state.activity ? "heart-icon-solid ":"heart-icon-outl ",
  userIcon = state.user_acc ? "user-icon-solid ":"user-icon-outl ";

  return(
    <div className="nav-mobi-container white-theme">
      <div className="navigation-mobi">
       {/* Home click*/ }
        <div>
          <Link to={ HOME }>
            <div className="navi-item">
              <div className={ homeIcon + "is24by24 center"}></div>
            </div>
          </Link>
        </div>

        <div>
          <Link to={ EXPLORE } >
            <div className="navi-item">
              <div className={ exploreIcon + "is24by24 center"}></div>
            </div>
          </Link>
        </div>

        <div>
          <a href="#e">
          <div className="navi-item">
            <div className="upload-icon-outl is24by24 center"></div>
          </div>
          </a>

        </div>


        <div>
          <Link to={ ACTIVITY }>
          <div className="navi-item">
            <div className={ heartIcon + "is24by24 center"}></div>
          </div>
          </Link>
        </div>

        <div className="i-user">
          <Link to={USER} >
            <div className="navi-item">
              <div className={ userIcon + "is24by24 center"}></div>
            </div>
          </Link>
        </div>
      </div>
      </div>
    );
}
export default MobiNav;
