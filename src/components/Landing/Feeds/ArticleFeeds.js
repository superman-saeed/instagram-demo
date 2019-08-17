import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "./Article";
import {fetchStatus, getNewPosts} from "../../LayoutFlow";
import {
  fetchNewArticles,
  fetchStories
} from "../../../misc/utils.js";



/*
Article component returns  a list of photo posts(article);
*/

const ArticleFeed =()=>{
    const dispatch = useDispatch(),
    state =useSelector(({landing})=>landing);

   useEffect(()=>{
     fetchNewArticles(state,dispatch);
     fetchStories(state,dispatch);
   },[]);

  return(
    <div className="article-feed">
      {fetchStatus(state.error.articles_status)}
      {getNewPosts(Article, state.new_articles)}
    </div>
  )
};

export default ArticleFeed;
