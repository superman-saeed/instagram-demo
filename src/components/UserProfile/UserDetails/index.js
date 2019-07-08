import React from "react";
import Topbar from "./Topbar";

const ProfilePhoto=()=>(

  <div className="profile-photo">
    <picture >
      <source media="(max-width:375px)" srcSet={null}  />
      <source srcSet={null}  />
      <img src={null} alt="profile" />
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



  return(
    <div>
      <Topbar header={"username"} />

      <div className="header">
          <ProfilePhoto />
          <ProfileInfo />
      </div>

      <div className="name-details">
      <p>{"name"}</p>
      <span>{"bio"}</span>

      </div>
    </div>
  )
}

export default UserDetails;
