import React from "react";
import loading_img from "../../img/progress.gif";

export const getNewPosts =(Component, newPost)=>{

  return (
    newPost.map(
      (json,key)=>(
        <Component json={json} key={key} />
      )
    )
  );
}

export const fetchStatus=(status, cb)=>{
  switch (status) {
    case "sucessful":
      return null;
    case "pending":

      return <Progress />;
    case "failed":
        return <div onClick={()=>cb()}>click to refresh</div>;
    default:
        return <Progress />
  }
}

export const Progress =()=>(
  <div>
  <img
  style={{
    width:64,
    margin:"auto",
    display:"block"
  }}

  src={loading_img} alt="loading..."/>
</div>
)
