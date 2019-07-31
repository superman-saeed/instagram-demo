import * as actionType from "../../constants/actionTypes";

const INITIALISE_STATE={
  explore_articles :[],
  viewed_articles :[],
  error:{
    explore_articles:null,
  }
}

const explore =(state=INITIALISE_STATE, action)=>{
  let {
    explore_articles,
    error
  } = state;

  switch (action.type) {

    case actionType.FETCH_EXPLORE:
      return {
        state,
        explore_articles:[
          ...explore_articles,
          "added explore article"
        ]
      };

    case actionType.LIKE_ARTICLE:
      return state;

    case actionType.ADD_PROFILE:
      return state;

    default:
      return state;

  }

};
export default explore;
