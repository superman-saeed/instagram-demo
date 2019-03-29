import React from "react";
import {Icon} from "semantic-ui-react";
import "../stylesheets/user.css";
import { Button } from 'semantic-ui-react';
import pic from "../img/pic.jpg";


class User extends React.Component {
  render(){
    return (
      <div className="">
      <div className="user top">
        <div className="select-user">
        <h3>User</h3>
        <div></div>
        </div>
        <a href="#archive"><Icon name="bars" size="large" /></a>
        <a href="#menu"><Icon name="history" size="large" /></a>
      </div>
      <div className="user-details">
       <div className="user-pic"><img src={pic} alt="imag" /></div>
       <div className="user-profile">
        <div><h2>1</h2><p>posts</p></div>
        <div><h2>2</h2><p>following</p></div>
        <div><h2>3</h2><p>followers</p></div>
       </div>
       <div className="edit"><button>Edit Profile</button></div>
      </div>
      <p>App still in progress</p>
      </div>
    );
  }
}
export default User;
