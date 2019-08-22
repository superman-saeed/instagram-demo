import React from "react";


//Acticle for single photo post
const Header =({username,img,option})=>(
  <header className="article-header">

     <div className="left-side">
        <div className="user-image is32by32">
        <img src={img} alt="profile" />
        </div>
        <div>
        <a href="#user" aria-label="user-profile">
          <strong className="truncate-text">{username}</strong>
        </a>
      </div>
    </div>

    <div className="right-side">
      <a href="#option" aria-label="option" onClick={(e)=>option(e)}>
        <div className="threedots-icon is24by24"></div>
      </a>
    </div>
  </header>
);

const Body=({img,desc,dbClick})=>(
  <div className="feed-body">
    <div><img onDoubleClick={(e)=> dbClick(e)} src={img} alt={desc} /></div>
  </div>
);

const Footer =({likes, desc,username})=>{
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
        <div  className="caption" style={{display:d}}>
        <a href="#user" aria-label="user-profile">
          <strong className="">{username}</strong>
        </a>
        <span>{" " + desc}</span>
        </div>
      </div>
  );
}


const Article =({json})=>{

  const option =(event)=>{
    event.preventDefault();
    console.log("option was click");
  }
  const likeD =(event)=>{
    event.preventDefault();
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
       likes={json.likes}
       username={json.user.username}
       desc={json.description} />

    </article>
  );
}

export default Article;
