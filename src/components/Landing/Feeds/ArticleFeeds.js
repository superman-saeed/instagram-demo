import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "./Article";
import {fetchStatus, getNewPosts} from "../../LayoutExtras";
import  actions from "../../../redux/actions/index";

const page = Math.floor((Math.random() * 9)+1);
/* one time fetch when component first mount */
const onMountFetch =(articles, dispatch)=>{

  dispatch({type:"home_navi"});// logo selector

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

    const fetchCB=()=>{
      dispatch(
        actions.fetchArticles(page) // (articles + 1)
      );
    }

   useEffect(()=>{
     onMountFetch(
       state.new_articles.length,
       dispatch
     )
   },[]);//[] for not watching any variable

  return(
    <div className="article-feed">
      {fetchStatus(state.error.articles, fetchCB )}
      {getNewPosts(Article, state.new_articles)}
    </div>
  )
};

export default ArticleFeed;
