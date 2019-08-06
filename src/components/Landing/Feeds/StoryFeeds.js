import React from "react";

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

const StoryBody=()=>(
  <div className="story-body">
    story
  </div>
);

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
