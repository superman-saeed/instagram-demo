import * as actionType from "../../constants/actionTypes";

const INITIALISE_STATE={
  new_articles:[],
  recent_profiles:[],
  liked_articles:[],
  seen_articles:[],
  add_stories :[],
  error:{
    articles:null,
    liked_articles: null,
    recent_profiles:null,
    stories:null
  }
}


const landing =(state=INITIALISE_STATE, action)=>{


  switch (action.type) {

    case actionType.ADD_ARTICLES:
      return newArticles(state,action);

    case actionType.FETCH_ARTICLES_FAILED:
      return articlesFailed(state,action);

    case actionType.LIKE_ARTICLE:
      return state;

    case actionType.ADD_PROFILE:
      return state;

    case actionType.SEEN_ARTICLE:
      return state;

    case actionType.ADD_STORIES:
      return newStories(state,action);

    case actionType.STORIES_FAILED:
        return storiesFailed(state,action);
    default:
      return state;

  }

};


const newArticles=(state, action)=>{
  return {
    ...state,
    new_articles:[
      ...state.new_articles,
       ...action.payload.new_articles
     ],
     error:{
       ...state.error,
       articles:action.payload.articles_status
     }
  };
}

const articlesFailed =(state, action)=>{
  return {
    ...state,
    error:{
      ...state.error,
      articles:action.payload.articles_status
    }
  }
}

const storiesFailed =(state, action)=>{
  return {
    ...state,
    error:{
      ...state.error,
      stories:action.payload.stories
    }
  }
}

const newStories=(state,action)=>{
  return {
    ...state,
    add_stories:[
      ...state.add_stories,
       ...action.payload.stories
     ],
     error:{
       ...state.error,
       stories:action.payload.stories_status
     }
  }
}


export default landing;
