import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../stylesheets/app.css";

function Feed(props){
  return(
    <div className="feed">
     <div className="feed-option"></div>
     <div className="feed-image">tg</div>

     <div className="feed-action">
      <a href="#like"><FontAwesomeIcon icon="heart" size="lg" /></a>
      <a href="#comments"><FontAwesomeIcon icon="comment" size="lg" /></a>
      <a href="#bookmark"><FontAwesomeIcon icon="bookmark" size="lg" /></a>
     </div>
     <div className="comments"></div>
    </div>
  );
}

class Home extends React.Component {
  render(){
    return (
      <div>
      <div className="top-bar right">
      <a href="#pic"><FontAwesomeIcon icon="camera" size="lg" /></a>
      <h2>Instagram</h2>
      <a class="right" href="#send"><FontAwesomeIcon icon="paper-plane" size="lg" /></a>
      <a class="right" href="#tv"><FontAwesomeIcon icon="tv" size="lg" /></a>
      </div>
      <div className="feed">
      <h2>Feeds</h2>
      <p>App is still in progress</p> </div>
      <Feed />
      </div>
    );
  }
}

export default Home;
