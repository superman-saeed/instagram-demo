import * as actionType from "../../constants/actionTypes";

const INITIALISE_STATE={
  articles:[],
  recent_profiles:[],
  liked_articles:[],
  viewed_articles:[],
  error:{
    articles:null,
    liked_articles: null,
    recent_profiles:null
  }
}

const landing =(state=INITIALISE_STATE, action)=>{
  let {
    articles,
    recent_profiles,
    liked_articles,
    error
  } = state;

  switch (action.type) {

    case actionType.FETCH_ARTICLES:
      return {state,articles:[...articles,"added article"] };

    case actionType.LIKE_ARTICLE:
      return state;

    case actionType.ADD_PROFILE:
      return state;

    case actionType.SEEN_ARTICLE:
      return state;

    default:
      return state;

  }

};
export default landing;
