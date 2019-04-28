import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Gallery from "./Gallery";
import Login from "./Login";
import pic from "../img/pic.jpg";
import "../stylesheets/user.css";


class User extends React.Component {
  render(){
    return (
      <div>
      <UserDetails />
      <Photos link={this.props.match.url}/>
      </div>
    );
  }
}


function Photos({link}){
  return(
    <Router>
      <div className="photo-line bborder">
        <div><Link to={`${link}/gallery`}><FontAwesomeIcon icon="image" size="small" /></Link></div>
        <div><Link to={`${link}/tag`}><FontAwesomeIcon icon="tag" size="lg" /></Link></div>
        <div><Link to="/user"><FontAwesomeIcon icon="user" size="lg" /></Link></div>
      </div>
      <Route exact  path={link} component={Gallery} />
      <Route path={`${link}/:id`} component={SwitchTabs} />
    </Router>

  )
}

function SwitchTabs({match}){
  const route = match.params.id;
  switch(route) {
    case "gallery":
      return <Gallery />;
    case "tag":
      return <Login />;
    default:
      return <Gallery />;

  }
}

function UserDetails(props){
  return(
    <div>
    <div className="user top-bar">
      <div className="select-user">
      <h3>User</h3>
      <div></div>
      </div>
      <a href="#archive"><FontAwesomeIcon icon="bars" size="lg" /></a>
      <a href="#menu"><FontAwesomeIcon icon="history" size="lg" /></a>
    </div>

    <div className="user-details">
     <div className="user-pic"><img src={pic} alt="profile pic" /></div>
     <div className="user-profile">
      <div><h2>1</h2><span>posts</span></div>
      <div><h2>2</h2><span>followers</span></div>
      <div><h2>3</h2><span>following</span></div>
     </div>
     <div className="edit"><button>Edit Profile</button></div>
    </div>
    <div className="name-details">
    <p>Name</p>
    <p>App still in progress</p>
    <p>url</p>
    </div>
    </div>
  )
}
export default User;
