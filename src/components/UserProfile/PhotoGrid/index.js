import React from "react";


class PhotoGrid extends React.Component {
  constructor(props){
    super(props);
    this.list = [1,2,0,4,5,6,7,8];
    this.state={
      pages:[]
    }
    this.mount =true;
  }

componentDidMount(){
  const {path} = this.props,
  {pages} = this.state,
  {user} = pages.length ? pages[0]:{username:""};
  if(this.mount){
    if(pages.length >0 && user.username!==path){

    }else{

    }
  }
}

componentWillUnmount(){
  this.mount = false;
}


  render(){

    const elements= this.list.map((num,i)=>
       <div className="photo-frame" key={i}>
       <div className="gallery-photo">{num}</div>
    </div>);


    return (
      <div className="gallery">
       {elements}
      </div>
    );
  }
}
export default PhotoGrid;
