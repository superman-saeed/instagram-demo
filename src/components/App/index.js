import { BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import Home from "../Home";
import User from "../UserProfile";
import Upload from "../Upload/index.js";
import Search from "../Search";
import Activity from "../Activity";
import Navigation from "../Nav";
import * as Routes from "../../constants/routes";
import {PhotoProvider} from "./context";
import {listPhotos} from "../../lib/Unsplash";


/*
  Main navigation component and routing
*/
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      url:[]
    }
  }
  componentDidMount(){
    listPhotos().then(data=>console.log(data))
  }
  render(){
    return (
      <div className="app">
        <PhotoProvider value={[1,2,3,4]}>
            <Router>
            <Route exact
              path={Routes.LANDING}
              component={Home} />

             <Route path={Routes.ACTIVITY} component={Activity} />

             <Route path={Routes.USER} component={User} />

             <Route path={Routes.UPLOAD} component={Upload} />

             <Route path={Routes.SEARCH} component={Search} />

             <Navigation />
            </Router>
        </PhotoProvider>
      </div>
    );
  }
}

export default App;
