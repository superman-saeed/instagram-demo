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
      <Route  path={`${url}/:id`} component={SwitchTabs} />
      <Route  exact path={url} component={Following} />
     </Router>
    );
  }
}

function SwitchTabs({match}){
  const route = match.params.id;
 console.log(route);
  switch(route) {
    case "you":
      return <You />;
    case "following":
      return <Following />;
    default:
      return <Following />;

  }
}
export default Activity;
