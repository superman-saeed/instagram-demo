import React from "react";
import pic from "../../../img/background.png";

//Acticle for single photo post
const ArticleHeader =({username})=>(
  <header className="feed-header">
    <div className="one">
      <div className="feed-image">
      </div>
    </div>

    <div className="two">
     <div>
      <a href="#user" aria-label="user-profile">
        <strong style={
          {
            display:"inline-block",
            width:160,
            overflow:"hidden",
            textOverflow:"ellipsis"
          }
        }>{username}</strong>
      </a>
      <span style={{fontSize:12, display:"block"}}>
      unknown location</span>
      </div>

    </div>

    <div className="three">
      <a href="#option" aria-label="option">
        <div className="threedots-icon is24by24"></div>
      </a>
    </div>
  </header>
);

const ArticleBody=({img})=>(
  <div className="feed-body">
    <div><img src={img} alt="two girls" /></div>
  </div>
);

const ArticleFooter =()=>(
  <div className="feed-footer">
    <div className="feed-actions">
      <div className="left-actions">
        <div aria-label="button"><a href="#action-like"><div className="activity-icon-outl is24by24"></div></a></div>
        <div aria-label="button"><a href="#action-comment"><div className="comment-icon-outl is24by24"></div></a></div>
        <div aria-label="button"><a href="#action-share"><div className="direct-icon-outl is24by24"></div></a></div>
      </div>
      <div className="right-actions">
        <div aria-label="button"><a href="#action-like"><div className="tag-icon-outl is24by24"></div></a></div>
      </div>

    </div>
    <div className="feed-likes"><br/><strong>60 likes</strong></div>

  </div>
)


const Article =({json})=>{

  return (

    <article className="feed white-theme">
      <ArticleHeader username={json.user.username}/>
      <ArticleBody
      img={json.urls.regular}/>

      <ArticleFooter />

    </article>
  );
}

export default Article;
