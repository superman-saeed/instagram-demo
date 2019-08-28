import React from "react";

const Header =({username,img,option})=>(
  <header className="article-header">

     <div className="left-side">
        <div className="user-image is32by32">
        <img src={img} alt="profile" />
        </div>
        <div>
        <a href="#user" aria-label="user-profile">
          <strong className="truncate-text">{username}</strong>
        </a>
      </div>
    </div>

    <div className="right-side">
      <a href="#option" aria-label="option" onClick={(e)=>option(e)}>
        <div className="threedots-icon is24by24"></div>
      </a>
    </div>
  </header>
);

export default Header;
