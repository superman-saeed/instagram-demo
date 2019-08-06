import React from "react";
import {useSelector} from "react-redux";
import {fetchStatus, getNewPosts} from "../../LayoutFlow";
import loading_img from "../../../img/progress.gif";

const StoryHeader=()=>(
    <div className="story-header">
      <div>
        <div className="user-image is48by48">
          <img src="" alt="github" />
        </div>
      </div>
      <div>
       instagram-demo<br/>
       <span>
       <a href="https://github.com/superman-saeed/instagram-demo">fork me github</a>
       </span>
      </div>
    </div>
);

const StoryItem=({json})=>(
  <div>
    <div className="user-image is48by48">
      <img src={json.cover_photo.urls.thumb} alt="github" />
    </div>
   <span>{json.title}</span>
  </div>
)


const StoryBody=()=>{
  const state =useSelector(({landing})=>landing);
  return(
    <div className="story-body">
    <div>Stories</div>
      {fetchStatus(state.error.stories)}
      {getNewPosts(StoryItem, state.add_stories)}
    </div>
  );
}

const Storyfooter=()=>(
    <div className="footer">A demo by
    <a href="https://superman-saeed.github.io"> Saeed</a>
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
