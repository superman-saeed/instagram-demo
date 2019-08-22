import * as actionType from "../../constants/actionTypes";

export const fetchExplore=(collection)=>{
  return{
    type: actionType.FETCH_EXPLORES,
    payload:{
      collection: collection,
    }
  }
}


export const addExplores =(explore)=>{
  return{
    type: actionType.ADD_EXPLORES,
    payload:{
      explore: explore,
      explore_status:"sucessful"
    }
  }
}
