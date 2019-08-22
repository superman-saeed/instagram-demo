import React,{ useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import  actions from "../../redux/actions/index";



const Header =()=>(
  <div>
   <h1>Explore</h1>
  </div>
)

const Body =()=>(
  <div className="photo-grid">
      <div className="photo-quadrant">
       <div className="photo-cover">

       </div>
     </div>
     <div className="photo-quadrant">
      <div className="photo-cover">

      </div>
    </div>
    <div className="photo-quadrant">
     <div className="photo-cover">

     </div>
   </div>
  </div>
)

const Footer =()=>(
  <div>
   footer 2018
  </div>
)



const Explore = ()=>{
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actions.fetchExplore())
  },[]); //[] not watch any viaribles
  return(
    <div className="app-body container">
       <Header />
       <Body />
       <Footer />
    </div>
  )

}

export default Explore;
