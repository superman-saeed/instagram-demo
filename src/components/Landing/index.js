import React from "react";
import Navigation from "./Header";
import AllFeeds  from "./Feeds"


const Home=()=>(
    <div className="home app-body">
      <Navigation />
      <AllFeeds />
    </div>
  );

export default Home;
