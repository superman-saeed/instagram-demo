import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../stylesheets/home.css";

class Home extends React.Component {
  render(){
    return (
      <div>
      <div className="toolbar top">
      <a href="#pic"><FontAwesomeIcon icon="camera" size="lg" /></a>
      <h4>Instagram</h4>
      <a href="#send"><FontAwesomeIcon icon="paper-plane" size="lg" /></a>
      <a href="#tv"><FontAwesomeIcon icon="tv" size="lg" /></a>
      </div>
      <div className="feed">
      <h2>Feeds</h2>
      <p>App is still in progress</p> </div>
      </div>
    );
  }
}

export default Home;
