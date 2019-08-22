import React,{ useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import  actions from "../../redux/actions/index";
import {getNewPosts, fetchStatus } from "../LayoutFlow";


const SquarePhoto =({json})=>(
  <div className="photo-quadrant">
   <div className="photo-cover">
    <a href="#photo">
      <img src={json.urls.thumb} alt="image" />
    </a>
   </div>
 </div>
)

const Header =()=>(
  <div>
   <h1>Explore</h1>
  </div>
)

const Body =({photosDetails,status})=>(
  <>
  <div className="photo-grid">
    {getNewPosts(SquarePhoto, photosDetails)}
  </div>
    {fetchStatus(status)}
  </>
)

const Footer =()=>(
  <div>
   footer 2019
  </div>
)



const Explore = ()=>{
  const dispatch = useDispatch(),
  state =useSelector(({explore})=>explore);

  useEffect(()=>{
    dispatch(actions.fetchExplore())
  },[]); //[] not watch any viaribles
  return(
    <div className="app-body container">
       <Header />
       <Body
       photosDetails={state.explore_articles}
       status={state.error.explores}/>
       <Footer />
    </div>
  )

}

export default Explore;
