import React from "react";
import {getUserPhotos} from "../../../lib/Unsplash";

const img={
  width:"inherit",
  height:"inherit"
}

class PhotoGrid extends React.Component {
  constructor(props){
    super(props);
    this.mount =true;
    this.path = this.props.path;
    this.setState = this.props.setState;
    this.photos = this.props.photos;
  }

componentDidMount(){

  if(this.mount && this.photos().gridPhotos.length ===0){
    getUserPhotos(this.path).then((data)=>{
       this.setState({gridPhotos:data});
    })

  }
}

componentWillUnmount(){
  this.mount = false;
}


  render(){
    const elements= this.photos().gridPhotos.map((json,i)=>
       <div className="photo-frame" key={i}>
       <div style={{background:"url(" + json.urls.thumb + ")",
         backgroundSize:"cover" }}  className="gallery-photo">
       </div>
    </div>);


    return (
      <div className="gallery">
       {elements}
      </div>
    );
  }
}
export default PhotoGrid;
