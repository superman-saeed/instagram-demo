import React from "react";
import Feed from "./PhotoFeed";
import Topbar from "./Topbar";
import StoryLine from "./StoryLine";
import {listPhotos} from "../../lib/Unsplash";


class Home extends React.Component {
  constructor(props){
    super(props);
    this.store = this.props.getState;
    this.setStore = this.props.setState;
    this.mount = true;
  }

  componentDidMount(){
    const {pages_feed} = this.store();
    let request;

    if(this.mount && pages_feed.length===0){
       request = listPhotos((pages_feed.length + 1));
       request.then((data)=>{
         console.log(data)
         this.setStore({pages_feed:data})
       })
       request.catch((err)=> console.error("error from app" ));
     }

  }

  componentWillUnmount(){
    this.mount =false;
  }

  render(){

    return (
      <div>
        <Topbar />
        <StoryLine />
       {(this.store().pages_feed.length ?
         this.store().pages_feed.map((json,key)=>(<Feed json={json} key={key} />))
        :(<div>loading</div>)

      )}

      </div>
    );
  }
}

export default Home;
