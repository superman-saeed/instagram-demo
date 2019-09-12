import React from "react";
import {Link} from "react-router-dom";
import SearchBox from "../../LayoutExtras/SearchBox";
import {
  HOME,
  EXPLORE
} from "../../../constants/routes.js"


const  DesktopNav =()=>(
  <div className="navigation-desk white-theme">
    <div className="container">
      <div className="nav-parent">

        <div className="item1">
        <div className="brand-logo is24by24"></div>
        <div className="divider"></div>
          <Link to={ HOME }>
            <div className="instagram-logo absolute"></div>
          </Link>
        </div>


        <div className="item2">
          <SearchBox />
        </div>
        <div className="item3">
          <div>
            <Link to={ EXPLORE }>
              <div className="compass-icon-outl is24by24"></div>
            </Link>
          </div>

          <div>
            <div className="heart-icon-outl is24by24"></div>
          </div>
          <div>
            <div className="user-icon-outl is24by24"></div>
          </div>
        </div>
      </div>

    </div>
 </div>

);

export default DesktopNav;
