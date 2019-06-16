import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*
 component for stories and posts

*/
function Feed(props){
  return(
    <div className="feed">
     <div className="feed-option">
     <span></span><span id="post-owner"><a href="/user" >us_er</a></span>
     <a href="#option"><FontAwesomeIcon icon="ellipsis-v"  pull="right"/></a>
     </div>
     <div className="feed-image">
     App is still in progress
     </div>

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
      <a href="#addUser"><FontAwesomeIcon icon="user-plus" flip="horizontal" size="lg" /></a>
      </div>
      <div className="stories">
      <span className="my-story">
      <FontAwesomeIcon icon="plus-circle" size="small" />
      </span>
      </div>

      <Feed />
      </div>
    );
  }
}

export default Home;
