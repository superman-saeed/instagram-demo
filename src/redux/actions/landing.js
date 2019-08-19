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

export const fetchStories=(num)=>{
  return{
    type: actionType.FETCH_STORIES,
    payload:{
      page: num,
    }
  }
}

export const articlesFailed= (num)=>{
  return{
    type: actionType.FETCH_ARTICLES_FAILED,
    payload:{
      articles_status:"failed"
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

export const storiesFailed=(num)=>{
  return {
    type: actionType.STORIES_FAILED,
    payload:{
      stories:"failed",

    }
  }
}
