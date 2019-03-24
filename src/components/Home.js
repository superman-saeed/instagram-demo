import React from "react";
import {Icon} from "semantic-ui-react";
import "../stylesheets/home.css";

class Home extends React.Component {
  render(){
    return (
      <div className="toolbar">
      <a href="#pic"><Icon name="camera" size="large"  size="large"/></a>
      <h3>Instagram</h3>
      <a href="#send"><Icon name="send" size="large"  size="large"/></a>
      <a href="#tv"><Icon name="tv"  size="large"/></a>
      </div>
    );
  }
}

export default Home;
