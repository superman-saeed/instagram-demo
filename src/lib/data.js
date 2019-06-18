
export function getInfo(json){
  const {
    user,
    likes,
    description,
    urls
  } = json;

  const {
    instagram_username,

  } = user;

  const {thumb} = urls;

  return {
    url:thumb,
    likes:likes,
    desc: description,
    insta : instagram_username,
    
  }



}
