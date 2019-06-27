import React from "react";
import Topbar from "./Topbar";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfilePhoto=({medium,large})=>(

  <div className="profile-photo">
    <picture >
      <source media="(max-width:375px)" srcSet={medium}  />
      <source srcSet={large}  />
      <img src={medium} alt="profile" />
    </picture>
 </div>

);

const ProfileInfo=()=>(
  <div className="profile_info">
      <ul>
        <li>1
          <br/><span>Likes</span>
        </li>
        <li>2
          <br/><span>Post</span>
        </li>
        <li>3
          <br/><span>Views</span>
        </li>
      </ul>
  </div>
)



const UserDetails=({info})=>{
  const {name, bio ,profile_image,username} = info;


  return(
    <div>
      <Topbar header={username} />

      <div className="header">
          <ProfilePhoto
            medium={profile_image.medium}
            large={profile_image.large} />
          <ProfileInfo />
      </div>

      <div className="name-details">
      <p>{name}</p>
      <span>{bio}</span>

      </div>
    </div>
  )
}

export default UserDetails;
