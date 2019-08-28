import React from "react";


const Body=({img,desc,dbClick})=>(
  <div className="feed-body">
    <div><img onDoubleClick={(e)=> dbClick(e)} src={img} alt={desc} /></div>
  </div>
);

export default Body;
