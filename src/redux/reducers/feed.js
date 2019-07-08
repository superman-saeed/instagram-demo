import * as actionType  from "../../constants/actionTypes.js";


const INITIALIZE ={
  unfeed:[],
  readfeed:[],
  likedfeed:[],
}

export const photoFeeds=(state=INITIALIZE, action)=>{
 switch (action.type) {
   case actionType.FETCH_HOME_FEED:
         return {
           ...state,
           unfeed:[
             ...state.unfeed,
             action.payload.newPage]
           }
   case actionType.LIKE_FEED:
         return {
           ...state,
           likedfeed:[
             ...state.likedfeed,
             action.payload]
           }
    case actionType.READ_FEED:
          return {
            ...state,
            readfeed:[
              ...state.readfeed,
              action.payload.photo]
            }
   default:
        return state;

 }
}
