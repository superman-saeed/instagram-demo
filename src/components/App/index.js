import React,{lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import * as route from "../../constants/routes";
import Navigation from "./Navigation";
import Explore from "../Explore";
import NotFound from "./NotFound";


const Home = lazy(()=> import("../Landing"));



const App =()=>{

  return(
    <Provider store={ store } >
      <div>
        <Suspense fallback={<div>This is fallback</div>}>
          <Router>
            <Navigation />
              <Switch>
                <Route exact path={route.HOME} component ={Home}/>
                <Route path={route.EXPLORE} component ={Explore}/>
                <Route component={NotFound} />
              </Switch>
          </Router>

        </Suspense>
      </div>
   </Provider>

  )
}

export default App;
