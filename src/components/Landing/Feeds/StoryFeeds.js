import React from "react";
import {useSelector} from "react-redux";
import {fetchStatus, getNewPosts} from "../../LayoutFlow";
import git_img from "../../../img/github.png";

const StoryHeader=()=>(
    <div className="story-header">
      <div>
        <div className="user-image is64by64">
          <img src={git_img} alt="github" />
        </div>
        <div style={{display:"inline-block"}}>

         <a href="https://github.com/superman-saeed/instagram-demo">instagram-demo<br/>fork me github</a>
        </div>

      </div>

    </div>
);

const StoryItem=({json})=>(
  <div>
    <div className="user-image is48by48">
      <img src={json.cover_photo.urls.thumb} alt="github" />
    </div>
   <p class="truncate-text"  ><strong><a href="#lin" title={json.title}>{json.title}</a></strong></p>
  </div>
)


const StoryBody=()=>{
  const state =useSelector(({landing})=>landing);
  return(
    <div className="story-body">
    <div><strong> Stories</strong></div>
      {fetchStatus(state.error.stories)}
      {getNewPosts(StoryItem, state.add_stories)}
    </div>
  );
}

const Storyfooter=()=>(
    <div className="footer">
    <strong><a href="https://superman-saeed.github.io">A demo by Saeed</a></strong>
    </div>
);

const StoryLine = ()=>(
  <article className="story-line">
    <div className="story-container">
     <StoryHeader />
     <StoryBody />
     <Storyfooter />
    </div>
  </article>
)

export default StoryLine;
