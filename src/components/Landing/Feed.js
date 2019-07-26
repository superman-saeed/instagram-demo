import React from "react";
import StoryLine from "./StoryLine";
import pic from "../../img/background.png"

//Acticle for single photo post
const Article =()=>(
  <article className="feed white-theme">
    {/*start of feed header*/}
    <header className="feed-header">
      <div className="one">
        <div className="feed-image">
        </div>
      </div>

      <div className="two">
       <div>
        <a href="#user" aria-label="user-profile">
          <strong>user</strong>
        </a>
        <span style={{fontSize:12, display:"block"}}>
        unknown location</span>
        </div>

      </div>

      <div className="three">
        <a href="#option" aria-label="option">
          <div className="threedots-icon"></div>
        </a>
      </div>
    </header>
    {/*end of feed header*/}


    <div className="feed-body">
      <div><img src={pic} alt="two girls" /></div>
    </div>
    {/* end of feed-body*/ }
    <div className="feed-footer">
      <div className="feed-actions">
        <div className="left-actions">
          <div aria-label="button"><a href="#action-like"><div className="activity-icon-outl"></div></a></div>
          <div aria-label="button"><a href="#action-comment"><div className="comment-icon-outl"></div></a></div>
          <div aria-label="button"><a href="#action-share"><div className="upshare-icon-outl"></div></a></div>
        </div>
        <div className="right-actions">
          <div aria-label="button"><a href="#action-like"><div className="tag-icon-outl"></div></a></div>
        </div>

      </div>
      <div className="feed-likes"><strong>60 likes</strong></div>

    </div>
  </article>
)


const Feed = () =>(
  <div className="container">
   <div className="content">
    <div className="feed-article">
      <Article />
      <Article />
    </div>

    <StoryLine />

   </div>
  </div>
);

export default Feed;
