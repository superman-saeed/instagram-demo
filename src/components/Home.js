import React from "react";
import {Icon} from "semantic-ui-react";
import "../stylesheets/home.css";

class Home extends React.Component {
  render(){
    return (
      <div>
      <div className="toolbar top">
      <a href="#pic"><Icon name="camera" size="large" /></a>
      <h3>Instagram</h3>
      <a href="#send"><Icon name="send" size="large"/></a>
      <a href="#tv"><Icon name="tv"  size="large"/></a>
      </div>
      <div className="feed">
      <h2>Feeds</h2>
      <p>App is still in progress</p> </div>
      </div>
    );
  }
}

export default Home;
