import React,{useState} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


//Acticle for single photo post
const Article =({json})=>{
  const init = {
    comment:[],
    like:0,
    photoStat:"pending",
    photo:null
  },
  [info, setInfo] = useState(init);


  const option =(event)=>{
    event.preventDefault();
    console.log("option was click");
  }
  const likeD =(event)=>{
    event.preventDefault();
    setInfo({like:1});
    console.log(" was double click");
  }

  return(

    <article className="feed white-theme">

      <Header
      username={json.user.username}
      img={json.user.profile_image.small}
      option={option}/>

      <Body
      img={json.urls.small}
      desc={json.description}
      dbClick={likeD} />

      <Footer
       likes={json.likes + info.like}
       username={json.user.username}
       caption={json.description}
       likeStatus={info.like}
       likeAction ={likeD}/>

    </article>
  );
}

export default Article;
