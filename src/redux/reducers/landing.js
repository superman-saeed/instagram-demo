import * as actionType from "../../constants/actionTypes";

const INITIALISE_STATE={
  new_articles:[],
  recent_profiles:[],
  liked_articles:[],
  seen_articles:[],
  error:{
    articles:null,
    liked_articles: null,
    recent_profiles:null
  }
}


const landing =(state=INITIALISE_STATE, action)=>{


  switch (action.type) {

    case actionType.FETCH_ARTICLES:
      console.log(action.payload);
      return {
        ...state,
        new_articles:[
          ...state.new_articles,
           ...action.payload.new_articles
         ]
      };

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
