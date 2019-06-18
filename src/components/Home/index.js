import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Feed from "../PhotoFeed";
import {PhotoConsumer} from "../App/context";

class Home extends React.Component {

  render(){

    return (
      <div>
        <div className="top-bar">
          <a href="#pic"><FontAwesomeIcon pull="left" icon="camera" size="lg" /></a>
          <h2>Instagram</h2>
          <a href="#addUser"><FontAwesomeIcon icon="user-plus" flip="horizontal" size="lg" /></a>
        </div>

        <div className="stories">
          <span className="my-story">
          <FontAwesomeIcon icon="plus-circle" size="lg" />
          </span>
        </div>

       <PhotoConsumer>
       {arr =>(
         arr.length?
         arr.map((x,y)=>(<Feed json={x} key={y} />))
         :(<div>loading</div>)

       )}

       </PhotoConsumer>
      </div>
    );
  }
}

export default Home;
