import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_SECRET_KEY
});

export default unsplash;
export const getRandom =(obj)=>{
      unsplash.photos.getRandomPhoto(obj);
}
export const getUserPhotos= (obj)=>{
  return (unsplash.users.photos(obj)
  .then((data)=>data.json()));
}
export const listPhotos =(page)=>{
  return (unsplash.photos.listPhotos(page, 10)
  .then((data)=>data.json()));

  }
