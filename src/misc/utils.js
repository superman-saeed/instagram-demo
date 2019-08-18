import action from "../redux/actions";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_SECRET_KEY
});

export default unsplash;

// export const fetchNewArticles=(state, dispatch)=>{
//   unsplash.photos.listPhotos(2, 5, "popular")
//   .then((data)=>data.json())
//   .then(json => {
//     dispatch(action.addActicles(json));
//   }).catch(err=>{
//     dispatch(
//       action.errorHandle("articles_status")
//     );
//   })
//
//
// }
//
// export const fetchExplore =()=>{
//
// }
//
// export const fetchUserDetails =(state, dispatch)=>{
//
// }
//
// export const fetchStories =(state, dispatch)=>{
//   unsplash.collections.listCollections(1, 10, "popular")
//     .then(data=>data.json())
//     .then(json => {
//       dispatch(action.addStories(json));
//     }).catch(err=>{
//       dispatch(action.errorHandle("stories"));
//     })
// }
