import React from "react";
import { withRouter } from 'react-router-dom';
import Feeds from "./feeds";
import Topbar from "./Topbar";
import StoryLine from "./StoryLine";


class Home extends React.Component {


  render(){

    return (
      <div>
        <Topbar />
        <StoryLine />
        <Feeds  />

      </div>
    );
  }
}

export default Home;
