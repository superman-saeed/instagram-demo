import { BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import Home from "../Home";
import User from "../UserProfile";
import Upload from "../Upload/index.js";
import Search from "../Search";
import Activity from "../Activity";
import Navigation from "./Navigation";
import * as Routes from "../../constants/routes";

/*
  Main navigation component and routing
*/
class App extends React.Component {

  render(){
    return (
      <div className="app">
            <Router>
            <Route exact
              path={Routes.LANDING}
              component={Home} />

             <Route path={Routes.ACTIVITY} component={Activity} />

             <Route path={`${Routes.USER}/:id`} component={User} />

             <Route path={Routes.UPLOAD} component={Upload} />

             <Route path={Routes.SEARCH} component={Search} />

             <Navigation />
            </Router>
      </div>
    );
  }
}

export default App;
