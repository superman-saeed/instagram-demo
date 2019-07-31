import * as actionType from "../../constants/actionTypes";

export const likeArticle=(id,url)=>{
  return {
    type: actionType.LIKE_ARTICLE,
    payload:{
      id:id,
      url:url
    }
  }
}

export const addActicles =(articles)=>{
  return{
    type: actionType.FETCH_ARTICLES,
    payload:{
      new_articles: articles
    }
  }

}

export const comment =(comment)=>{
  return{
    type: actionType.FETCH_ARTICLES,
    payload:{
      id:comment.id,
      comment:comment.text
    }
  }

}
