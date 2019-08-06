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

export const fetchStatus=(status)=>{
  switch (status) {
    case "sucessful":
      return null;
    case "failed":
        return <div>click to refresh</div>;
    default:
        return (
          <div>
          <img
          style={{
            width:64,
            margin:"auto",
            display:"block"
          }}

          src={loading_img} alt="loading..."/>
        </div>);
  }
}
