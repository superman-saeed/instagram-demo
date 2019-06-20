import React from "react";
import Feed from "./PhotoFeed";
import Topbar from "./Topbar";
import StoryLine from "./StoryLine";
import {listPhotos} from "../../lib/Unsplash";

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      pages:[]
    }
    this.mount = true;
  }
  componentDidMount(){
    const {pages} = this.state;
    if(this.mount && pages.length===0){
       listPhotos().then((data)=>{
         console.log(data)
         this.setState({pages:data})
       }).catch((err)=> console.log(err));
     }

  }

  componentWillUnmount(){
    this.mount =false;
  }

  render(){
    this.flist=[]
    return (
      <div>
        <Topbar />
        <StoryLine />
       {(this.state.pages.length ?
         this.state.pages.map((json,key)=>(<Feed json={json} key={key} />))
        :(<div>loading</div>)

      )}

      </div>
    );
  }
}

export default Home;
