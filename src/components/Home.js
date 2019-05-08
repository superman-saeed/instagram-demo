import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../stylesheets/app.css";

function Feed(props){
  return(
    <div className="feed">
     <div className="feed-option">
     <a href="#option"><span>us_er</span><FontAwesomeIcon icon="ellipsis-v" size="lg" pull="right"/></a>
     </div>
     <div className="feed-image">tg</div>

     <div className="feed-action">
      <a href="#like"><FontAwesomeIcon icon="heart" size="lg" /></a>
      <a href="#like"><FontAwesomeIcon icon="comment" flip="horizontal" size="lg" /></a>
      <a href="#bookmark"><FontAwesomeIcon icon="bookmark" size="lg" pull="right" /></a>
     </div>
     <div className="comments"></div>
    </div>
  );
}

class Home extends React.Component {
  render(){
    return (
      <div>
      <div className="top-bar">
      <a href="#pic"><FontAwesomeIcon pull="left" icon="camera" size="lg" /></a>
      <h2>Instagram</h2>
      <a href="#addUser"><FontAwesomeIcon icon="user-plus" size="lg" /></a>
      </div>
      <div className="feed">
      <span>App is still in progress</span> </div>
      <Feed />
      </div>
    );
  }
}

export default Home;
