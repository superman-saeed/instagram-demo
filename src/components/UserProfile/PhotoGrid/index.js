import React from "react";
import {getUserPhotos} from "../../../lib/Unsplash";


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
       <div className="gallery-photo">{json.urls.small}</div>
    </div>);


    return (
      <div className="gallery">
       {elements}
      </div>
    );
  }
}
export default PhotoGrid;
