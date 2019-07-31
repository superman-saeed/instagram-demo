import React from "react";
import {Link} from "react-router-dom";
import {
  HOME,
  EXPLORE,
  ACTIVITY,
  USER} from "../../../constants/routes.js"


const MobiNav=()=>(
  <div className="nav-mobi-container white-theme">
    <div className="navigation-mobi">
     {/* Home click*/ }
      <div>
        <Link to={ HOME }>
          <div className="navi-item">
            <div className="home-icon-solid is24by24 center"></div>
          </div>
        </Link>
      </div>

      <div>
        <Link to={ EXPLORE } >
          <div className="navi-item">
            <div className="explore-icon-outl  is24by24 center"></div>
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
          <div className="activity-icon-outl is24by24 center"></div>
        </div>
        </Link>
      </div>

      <div className="i-user">
        <Link to={USER} >
          <div className="navi-item">
            <div className="user-icon-outl is24by24 center"></div>
          </div>
        </Link>
      </div>
    </div>
    </div>
  );

export default MobiNav;
