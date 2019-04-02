import React from "react";


class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.list = [1,2,3,4,5];
  }
  render(){
    const elements= this.list.map((num,i)=> <div key={i}>{num}</div>)
    return (
      <div className="gallery">
       {elements}
      </div>
    );
  }
}
export default Gallery;
