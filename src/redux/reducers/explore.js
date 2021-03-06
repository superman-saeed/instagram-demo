import * as actionType from "../../constants/actionTypes";

const INITIALISE_STATE={
  explore_articles :[],
  viewed_articles :[],
  error:{
    explores:null,
  }
}

const explore =(state=INITIALISE_STATE, action)=>{


  switch (action.type) {

    case actionType.ADD_EXPLORES:
      return addExplores(state,action);

    case actionType.EXPLORES_STATUS:
      return exploresFailed(state, action);

    case actionType.LIKE_ARTICLE:
      return state;

    case actionType.ADD_PROFILE:
      return state;

    default:
      return state;

  }

};
const addExplores=(state,action)=>{

  return {
    ...state,
    explore_articles:[
      ...state.explore_articles,
      ...action.payload.explore
    ],
    error:{
      explores:"sucessful"
    }
  };
}

const exploresFailed=(state, action)=>{
  return {
    ...state,
    error:{
      ...state.error,
      explores:action.payload.explores_status
    }
  }
}

export default explore;
