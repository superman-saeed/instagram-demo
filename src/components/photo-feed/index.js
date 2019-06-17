import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*
 component for stories and posts

*/

const Feed =(props)=>{
  const {img} = props;
  return(
    <div className="feed">
       <div className="feed-option">
           <span></span><span id="post-owner"><Link to="/user" >us_er</Link></span>
           <a href="#option"><FontAwesomeIcon icon="ellipsis-v"  pull="right"/></a>
       </div>
       <div className="feed-image">
            <img style={{width:"inherit", height:"inherit"}} src={img} alt="random" />
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
export default Feed;
