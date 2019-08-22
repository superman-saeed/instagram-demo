import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_SECRET_KEY
});

export default unsplash;
