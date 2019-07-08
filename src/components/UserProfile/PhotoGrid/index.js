import React from "react";



const style={
  width:"100%",
  height:"100%",
  objectFit:"cover"
}
class PhotoGrid extends React.Component {

  constructor(props){
    super(props);
    this.mount =true;

  }


  //returns an array of photos
listPhotos=()=>{
  const list= this.photos().gridPhotos.map((json,i)=>
     <div className="photo-frame" key={i}>
     <div  className="gallery-photo">
     <img style={style} src={null} alt="no desciption" />
     </div>
  </div>);

  return list;
}
componentDidMount(){


}

componentWillUnmount(){
  this.mount = false;
}

  render(){
    return (
      <div className="gallery">

      </div>
    );
  }
}
export default PhotoGrid;
