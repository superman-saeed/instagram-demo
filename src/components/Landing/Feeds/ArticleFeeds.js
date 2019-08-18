import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "./Article";
import {fetchStatus, getNewPosts} from "../../LayoutFlow";
import * as actions from "../../../redux/actions/landing";

/* one time fetch when component first mount */
const onMountFetch =(articles, dispatch)=>{
  if(articles ===0){
    dispatch(
      actions.fetchArticles((articles + 1))
    )
  }
}

/*
Article component returns  a list of photo posts(article);
*/

const ArticleFeed =()=>{
    const dispatch = useDispatch(),
    state =useSelector(({landing})=>landing);

   useEffect(()=>{
     onMountFetch(
       state.new_articles.length,
       dispatch
     )
   },[]);//[] for not watching any variable

  return(
    <div className="article-feed">
      {fetchStatus(state.error.articles_status)}
      {getNewPosts(Article, state.new_articles)}
    </div>
  )
};

export default ArticleFeed;
