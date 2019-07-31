import React, {useEffect,useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewArticles} from "../../../misc/utils.js";
import Article from "./Article";


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
   },[]);

  return(
    <div className="feed-article">
      {getNewArticle(state.new_articles)}
    </div>
  )
};

export default ArticleFeed;
