import React from "react";


//Acticle for single photo post
const ArticleHeader =({username,img})=>(
  <header className="article-header">

     <div className="left-side">
        <div className="article-header-image">
        <img src={img} alt="profile" />
        </div>
        <div>
        <a href="#user" aria-label="user-profile">
          <strong className="truncate-text">{username}</strong>
        </a>
      </div>
    </div>

    <div className="right-side">
      <a href="#option" aria-label="option">
        <div className="threedots-icon is24by24"></div>
      </a>
    </div>
  </header>
);

const ArticleBody=({img,desc})=>(
  <div className="feed-body">
    <div><img src={img} alt={desc} /></div>
  </div>
);

const ArticleFooter =({likes, desc,username})=>{
    let _like = likes > 1 ?
    likes + " likes"
    :likes+ " like",
    d =desc===null ? "none":"block"


    return(
      <div className="feed-footer">
        <div className="article-actions">
          <div className="left-actions">
            <div aria-label="button"><a href="#action-like"><div className="activity-icon-outl is24by24"></div></a></div>
            <div aria-label="button"><a href="#action-comment"><div className="comment-icon-outl is24by24"></div></a></div>
            <div aria-label="button"><a href="#action-share"><div className="direct-icon-outl is24by24"></div></a></div>
          </div>
          <div className="right-actions">
            <div aria-label="button"><a href="#action-like"><div className="tag-icon-outl is24by24"></div></a></div>
          </div>

        </div>
        <div className="feed-likes"><strong>{_like}</strong></div>
        <div style={{display:d}}>
        <a href="#user" aria-label="user-profile">
          <strong className="">{username}</strong>
        </a>
        <span>{" " + desc}</span>
        </div>
      </div>
  );
}


const Article =({json})=>(

    <article className="feed white-theme">

      <ArticleHeader
      username={json.user.username}
      img={json.user.profile_image.small} />

      <ArticleBody
      img={json.urls.small}
      desc={json.description}/>

      <ArticleFooter
       likes={json.likes}
       username={json.user.username}
       desc={json.description} />

    </article>
  );


export default Article;
