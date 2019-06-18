import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getInfo} from "../../lib/data.js"
/*
 component for stories and posts

*/

const Feed =(props)=>{
  const {json} = props;
  const {
    insta,
    likes,
    desc,
    url
  }=getInfo(json);

  return(
    <div className="feed">
       <div className="feed-option">
           <span></span><span className="u-link" id="post-owner"><Link to="/user" >{insta}</Link></span>
           <a href="#option"><FontAwesomeIcon icon="ellipsis-v"  pull="right"/></a>
       </div>
       <div className="feed-image">
            <img style={{width:"inherit", height:"inherit"}} src={url} alt="random" />
       </div>

       <div className="feed-action">
          <a href="#like"><FontAwesomeIcon icon="heart" size="lg" /></a>
          <a href="#like"><FontAwesomeIcon icon="comment" flip="horizontal" size="lg" /></a>
          <a href="#bookmark"><FontAwesomeIcon icon="bookmark" size="lg" pull="right" /></a>
       </div>
       <div className="likes">
        {likes} likes
       </div>
       <div className="comments">
        <span className="u-link">{desc ? (<Link to="/user" >{insta}</Link>):null }</span> {desc}
       </div>
    </div>
  );
}
export default Feed;
