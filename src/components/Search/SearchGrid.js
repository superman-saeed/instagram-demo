import React from "react";


const style={
  objectFit:"cover",
  width:"inherit",
  height:"inherit"
};
const listPhotos=(data)=>{
  const list= data.map((json,i)=>
     <div className="photo-frame" key={i}>
     <div  className="gallery-photo">
     <img style={style} src={json.urls.thumb} alt="no desciption" />
     </div>
  </div>);

  return list;
}

const SearchGrid =({json})=>{
  return(
    <div className="gallery">
     {listPhotos(json)}
    </div>
  )
}

export default SearchGrid;
