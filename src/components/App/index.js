import React,{lazy, Suspense, useEffect } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import * as route from "../../constants/routes";
import Navigation from "./Navigation";


const Home = lazy(()=> import("../Landing"));


const App =()=>{

  useEffect(()=>{
    console.log("effect is working");

  });

  return(
    <Provider store={ store }>
      <div>
        <Suspense fallback={<div>This is fallback</div>}>
          <Router>
            <Navigation />
            <Route exact path={route.HOME} component ={Home}/>
          </Router>

        </Suspense>
      </div>
    </Provider>

  )
}

export default App;
