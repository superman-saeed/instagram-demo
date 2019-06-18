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
           <span></span><span className="u-link" id="post-owner"><Link to="/user" >us_er</Link></span>
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
       <div className="likes">
        200 likes
       </div>
       <div className="comments">
        <span className="u-link"><Link to="/user" >us_er</Link></span> some text about pic
       </div>
    </div>
  );
}
export default Feed;
