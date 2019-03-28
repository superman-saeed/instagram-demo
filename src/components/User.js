import React from "react";
import {Icon} from "semantic-ui-react";
import "../stylesheets/user.css";


class User extends React.Component {
  render(){
    return (
      <div className="">
      <div className="user top">
        <h3>superman-saeed</h3>
        <a href="#archive"><Icon name="bars" size="large" /></a>
        <a href="#menu"><Icon name="history" size="large" /></a>
      </div>
      <p>App still in progress</p>
      </div>
    );
  }
}
export default User;
