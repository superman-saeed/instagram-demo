import React from "react";
import Articles from "./ArticleFeeds";
import StoryLine from "./StoryFeeds";


const Feeds = () =>(
  <div className="container">
   <div className="content">
    <Articles />
    <StoryLine />
   </div>
  </div>
);



export default Feeds;
