import React from "react";
import {getUserPhotos} from "../../../lib/Unsplash";


const style={
  width:"100%",
  height:"100%",
  objectFit:"cover"
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
       <div  className="gallery-photo">
       <img style={style} src={json.urls.thumb} alt="no desciption" />
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
