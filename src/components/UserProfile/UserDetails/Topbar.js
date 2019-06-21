import React from "react";

const Topbar =({header})=>{

  return(
    <div className="user top-bar">
    <a href="#addUser"><FontAwesomeIcon pull="left" icon="cogs" size="lg" /></a>
    <h3>{" "+ header}</h3>
    <a href="#addUser"><FontAwesomeIcon icon="user-plus" size="lg" /></a>
  </div>);
}
