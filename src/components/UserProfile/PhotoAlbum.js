import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoGrid from "./PhotoGrid";

const PhotoAlbum=({tabClicked,userRoute, tabState})=>{
  const {isgrid,istags,iscollection} =tabState;

  return(
  <div>
    <div className="photo-line bborder">
      <div><a href="#grid" onClick={(e)=>tabClicked(e)}><FontAwesomeIcon icon="th" size="lg" /></a></div>
      <div><a href="#list" onClick={(e)=>tabClicked(e)}><FontAwesomeIcon icon="bookmark" size="lg" /></a></div>
      <div><a href="#tags" onClick={(e)=>tabClicked(e)}><FontAwesomeIcon icon="id-card-alt" size="lg" /></a></div>
    </div>
        {isgrid ? <PhotoGrid  path={userRoute}/> : null}
        {iscollection ?  <div><h4>You have not been tag in any photo</h4></div> : null}
        {istags ? <div><h4>No Photos of you</h4></div> : null}
  </div>)
}

export default PhotoAlbum;
