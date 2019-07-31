import action from "../redux/actions";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_SECRET_KEY
});



export const fetchNewArticles=(state, dispatch)=>{
  unsplash.photos.listPhotos(1, 5, "popular")
  .then((data)=>data.json())
  .then(json => {
    dispatch(action.addActicles(json));
  }).catch(err=>{
    console.log(err);
  })


}

export const fetchExplore =(state, dispatch)=>{

}

export const fetchUserDetails =(state, dispatch)=>{

}
