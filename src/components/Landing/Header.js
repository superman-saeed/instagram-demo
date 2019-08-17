import React from "react";
import {useDispatch} from "react-redux";
import {addTest} from "../../redux/actions/landing.js";


const Navigation =()=>{
  const dispatch = useDispatch();

  return(
  <div className="home-header-container white-theme">
    <div className="home-header">
      <div className="left-side"><a href="#camera"><div className="camera-icon-outl is24by24"></div></a></div>
      <div className="center-side"><a href="#logo"><div className="instagram-logo"></div></a></div>
      <div className="right-side">
      <a onClick={(e)=> dispatch(addTest())} href="#DM">
      <div className="direct-icon-outl is24by24"></div></a>
      </div>
    </div>

  </div>
);
}


export default Navigation;
