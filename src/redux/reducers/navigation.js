import * as actionType from "../../constants/actionTypes";

const INITIALISE_STATE={
  home :false,
  explore :false,
  activity:false,
  user_acc:false
}

const navigation =(state=INITIALISE_STATE, action)=>{


  switch (action.type) {

    case actionType.HOME_NAVI:
      return {
        ...INITIALISE_STATE,
        home:true
      }

    case actionType.EXPLORE_NAVI:
      return {
        ...INITIALISE_STATE,
        explore:true
      }

    case actionType.ACTIVITY_NAVI:
      return {
        ...INITIALISE_STATE,
        activity:true
      }
    case actionType.USER_ACC:
      return {
        ...INITIALISE_STATE,
        user_acc:true
      }

    default:
      return state;

  }

};

export default navigation;
