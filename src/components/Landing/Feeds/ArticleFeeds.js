import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "./Article";
import {fetchStatus} from "../../LayoutFlow";
import {
  fetchNewArticles,
  fetchStories
} from "../../../misc/utils.js";



const getNewArticle =(newArticle)=>{

  return (
    newArticle.map(
      (json,key)=>(
        <Article json={json} key={key} />
      )
    )
  );
}


// All photos articles
const ArticleFeed =()=>{
    const dispatch = useDispatch(),
    state =useSelector(({landing})=>landing);

   useEffect(()=>{
     fetchNewArticles(state,dispatch);
     fetchStories(state,dispatch);
   },[]);

  return(
    <div className="article-feed">
      {fetchStatus(state)}
      {getNewArticle(state.new_articles)}
    </div>
  )
};

export default ArticleFeed;
