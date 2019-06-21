import { BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import Home from "../Home";
import User from "../UserProfile";
import Upload from "../Upload/index.js";
import Search from "../Search";
import Activity from "../Activity";
import Navigation from "./Navigation";
import * as Routes from "../../constants/routes";
import {Provider} from "./context";

/*
  Main navigation component and routing
*/
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      pages_feed:[]
    }
    this.setStore = this.setStore.bind(this);

  }
 setStore(obj){
   this.setState(obj)
 }
 getStore=()=>this.state;

  render(){

    return (
      <div className="app">
      <Provider value={this.state}>
            <Router>
            <Route exact
              path={Routes.LANDING}
              render={(props)=>(
                <Home {...props}
                getState={this.getStore}
                setState={this.setStore} /> )} />

             <Route path={Routes.ACTIVITY} component={Activity} />

             <Route
             path={`${Routes.USER}/:id`} component={User} />

             <Route path={Routes.UPLOAD} component={Upload} />

             <Route path={Routes.SEARCH} component={Search} />

             <Navigation />
            </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
