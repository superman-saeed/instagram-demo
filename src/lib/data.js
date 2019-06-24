
export function getInfo(json){
  const {
    user,
    likes,
    description,
    urls
  } = json;

  const {
    instagram_username,
    profile_image,
    username

  } = user;

  const {small} = urls;

  return {
    url:small,
    likes:likes,
    desc: description,
    insta : instagram_username,
    profile_image:profile_image.small,
    username:username

  }



}
