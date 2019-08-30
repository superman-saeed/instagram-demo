import * as actionType from "../../constants/actionTypes";

export const fetchExplore=(page)=>{
  return{
    type: actionType.FETCH_EXPLORES,
    payload:{
      page: page,
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

export const exploresStatus=(info)=>{
  return {
    type:actionType.EXPLORES_STATUS,
    payload:{
      explores_status:info
    }
  }
}
