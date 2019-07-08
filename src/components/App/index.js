import { BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import {Provider} from "react-redux";
import store from "../../redux/store";
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
      <Provider store={store}>
      <div className="app light">
            <Router>
            <Route exact
              path={Routes.LANDING}
              render={props=>(
                <Home {...props}  /> )} />

             <Route path={Routes.ACTIVITY} component={Activity} />

             <Route
             path={`${Routes.USER}/:id`} component={User} />

             <Route path={Routes.UPLOAD} component={Upload} />

             <Route path={Routes.SEARCH}
             render={props=>(
               <Search {...props} />)} />

             <Navigation />
            </Router>
      </div>
     </Provider>
    );
  }
}

export default App;
