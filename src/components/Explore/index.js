import React,{ useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import  actions from "../../redux/actions/index";
import Header from "./Header"
import {getNewPosts, fetchStatus } from "../LayoutExtras";


const SquarePhoto =({json})=>(
  <div className="photo-quadrant">
   <div className="photo-cover">
    <a href="#photo">
      <img src={json.urls.thumb} alt="kids" />
    </a>
   </div>
 </div>
)

// const Header =()=>(
//   <div>
//    <Header />
//    <h1>Explore</h1>
//   </div>
// )

const page = Math.floor((Math.random() * 3)+1);
const onMountFetch =(explores, dispatch)=>{
 dispatch({type:"explore_navi"});// logo selector

  if(explores ===0){
    dispatch(actions.fetchExplore(page));

  }
}


const Body =({photosDetails,status, dispatch})=>{
  const fetchCB=()=>{
    dispatch(actions.fetchExplore(page));
  }

    return(
      <>
      <div className="photo-grid">
        {getNewPosts(SquarePhoto, photosDetails)}
      </div>
        {fetchStatus(status, fetchCB)}
      </>
  );
}

const Footer =()=>(
  <div>
   footer 2019
  </div>
)



const Explore = ()=>{
  const dispatch = useDispatch(),
  state =useSelector(({explore})=>explore);



  useEffect(()=>{
    onMountFetch(state.explore_articles.length, dispatch);
  },[]); //[] not watch any viaribles
  return(
    <div className="app-body container">
       <Header />
       <Body
       photosDetails={state.explore_articles}
       status={state.error.explores}
       dispatch={dispatch}/>

       <Footer />
    </div>
  )

}

export default Explore;
