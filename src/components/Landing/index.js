import React,{Component} from "react";
import Navigation from "./Navigation";
import AllFeeds  from "./Feeds"

class Home extends Component {

  render(){
    return(
      <div className="home app-body">
        <Navigation />
        <AllFeeds />
      </div>
    );
  }

}

export default Home;
