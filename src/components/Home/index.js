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
    const {pages} = this.store();

    if(this.mount && pages.length===0){
       listPhotos().then((data)=>{
         console.log(data)
         this.setStore({pages:data})
       }).catch((err)=> console.log(err));
     }

  }

  componentWillUnmount(){
    this.mount =false;
  }

  render(){
    console.log( "Home =" + (typeof this.setStore));
    return (
      <div>
        <Topbar />
        <StoryLine />
       {(this.store().pages.length ?
         this.store().pages.map((json,key)=>(<Feed json={json} key={key} />))
        :(<div>loading</div>)

      )}

      </div>
    );
  }
}

export default Home;
