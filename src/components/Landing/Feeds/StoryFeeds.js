import React from "react";

const StoryHeader=()=>(
    <div className="footer">story header</div>
);

const StoryBody=()=>(
  <div className="story-body">
    story
  </div>
);

const Storyfooter=()=>(
    <div className="footer">app by Saeed</div>
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
