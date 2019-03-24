import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import You from "./You";
import Following from "./Following";
import "../stylesheets/activity.css";


class Activity extends React.Component {
  render(){
    const {url} = this.props.match;
    return (
      <Router>
      <div className="activity">
       <div className="activity-nav">
       <ul>
       <li><Link to={`${url}/following`}>Following</Link></li>
       <li><Link to={`${url}/you`}>you</Link></li>
       </ul>
       </div>

      </div>
      <Route  path={`${url}/following`} component={Following} />
      <Route  path={`${url}/you`} component={You} />
      <Route  exact path={url} component={Following} />
     </Router>
    );
  }
}
export default Activity;
