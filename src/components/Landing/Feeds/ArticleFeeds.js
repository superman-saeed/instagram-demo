import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "./Article";
import {fetchStatus, getNewPosts} from "../../LayoutFlow";
import  actions from "../../../redux/actions/index";

/* one time fetch when component first mount */
const onMountFetch =(articles, dispatch)=>{
  const page = Math.floor((Math.random() * 9)+1)

  if(articles ===0){
    dispatch(
      actions.fetchArticles(page) // (articles + 1)
    );
    dispatch(
      actions.fetchStories(page)
    );
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
      {fetchStatus(state.error.articles)}
      {getNewPosts(Article, state.new_articles)}
    </div>
  )
};

export default ArticleFeed;
