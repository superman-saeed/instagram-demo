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

export const fetchArticles=(num)=>{
  return{
    type: actionType.FETCH_ARTICLES,
    payload:{
      page: num,
    }
  }
}

export const fetchArticlesError= (num)=>{
  return{
    type: actionType.FETCH_ARTICLES_FAILED,
    payload:{
      page: num,
    }
  }
}


export const addActicles =(articles)=>{
  return{
    type: actionType.ADD_ARTICLES,
    payload:{
      new_articles: articles,
      articles_status:"sucessful"
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

export const addStories=(data)=>{
  return{
    type: actionType.ADD_STORIES,
    payload:{
      stories:data,
      stories_status:"sucessful"
    }
  }

}
export const errorHandle=(name, value)=>{
  return{
    type: actionType.ERROR_FETCH,
    error:name
  }
}
