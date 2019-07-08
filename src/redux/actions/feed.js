import * as actionType from "../../constants/actionTypes";

export const newfeed=(newPage)=>{
    return {
      type: actionType.FETCH_HOME_FEED,
      payload:{
        newPage:newPage
      }
    };
}

export const likePhoto = (photoId, photoUrl)=>{
  return {
    type:actionType.LIKE_FEED,
    payload:{
      id:photoId,
      url:photoUrl
    }
  };
}

export const readFeed = photoDetails =>{
    return{
      type:actionType.READ_FEED,
      payload:{
        photo:photoDetails
      }
    }
}
