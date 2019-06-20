import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoGrid from "./PhotoGrid";

const PhotoAlbum=({click,path,userProps})=>{
  const {grid,tags,collection} =path;
  return(
  <div>
    <div className="photo-line bborder">
      <div><a href="#grid" onClick={(e)=>click(e)}><FontAwesomeIcon icon="th" size="lg" /></a></div>
      <div><a href="#list" onClick={(e)=>click(e)}><FontAwesomeIcon icon="bookmark" size="lg" /></a></div>
      <div><a href="#tags" onClick={(e)=>click(e)}><FontAwesomeIcon icon="id-card-alt" size="lg" /></a></div>
    </div>
        {grid ? <PhotoGrid path={userProps}/> : null}
        {collection ?  <div><h4>You have not been tag in any photo</h4></div> : null}
        {tags ? <div><h4>No Photos of you</h4></div> : null}
  </div>)
}

export default PhotoAlbum;
