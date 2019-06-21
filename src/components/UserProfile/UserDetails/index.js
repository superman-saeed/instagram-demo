import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserDetails(props){
  const {name, bio ,profile_image} = props.info
  return(
    <div>
    <div className="user top-bar">
      <a href="#addUser"><FontAwesomeIcon pull="left" icon="cogs" size="lg" /></a>
      <h3>User</h3>
      <a href="#addUser"><FontAwesomeIcon icon="user-plus" size="lg" /></a>
    </div>

    <div className="user-details">
     <div className="user-pic">
     <span className="my-story">
     <FontAwesomeIcon icon="plus-circle" size="sm" />
     </span></div>
     <div className="user-profile">
      <div><h2>1</h2><span>posts</span></div>
      <div><h2>2</h2><span>followers</span></div>
      <div><h2>3</h2><span>following</span></div>
     </div>
     <div className="edit"><button>Edit Profile</button></div>
    </div>
    <div className="name-details">
    <p>{name}</p>
    <span>{bio}</span>

    </div>
    </div>
  )
}

export default UserDetails;
