import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Topbar=()=>(
  <div>
  <div className="top-bar">
    <a href="#pic"><FontAwesomeIcon pull="left" icon="camera" size="lg" /></a>
    <h2>Instagram</h2>
    <a href="#addUser"><FontAwesomeIcon icon="user-plus" flip="horizontal" size="lg" /></a>
  </div>
  </div>

);


export default Topbar;
