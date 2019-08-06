import React from "react";
import loading_img from "../../img/progress.gif"

export const fetchStatus=({error})=>{
  switch (error.articles_status) {
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
