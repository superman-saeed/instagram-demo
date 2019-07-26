import React,{Component} from "react";
import Navigation from "./Navigation";
import Feed  from "./Feed"

class Home extends Component {

  render(){
    return(
      <div className="home app-body">
        <Navigation />
        <Feed />
      </div>
    );
  }

}

export default Home;
