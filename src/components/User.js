import React from "react";
import {Icon} from "semantic-ui-react";
import "../stylesheets/user.css";
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
      <div className="name-details">
      <p>Name</p>
      <p>App still in progress</p>
      <p>url</p>
      </div>

      <div className="photo-line bborder">
        <div><a href="#c"><Icon name="picture outline" size="large"/></a></div>
        <div><a href="#b"><Icon name="bookmark outline" size="large"/></a></div>
        <div><a href="#c"><Icon name="user outline" size="large"/></a></div>
      </div>
      <div>
      <div>1</div>
      <div>2</div>
      <div>App is still in progress</div>
       </div>
      </div>


    );
  }
}
export default User;
