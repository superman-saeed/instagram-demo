import React from "react";

const Footer =({likes,
                caption,username,
                likeStatus, likeAction})=>{
    let _like = likes > 1 ?
    likes + " likes"
    :likes+ " like",// to toggle between likes and like
    displayCaption = caption ===null ? "none":"block",//  check when to display caption
    displayLiked = likeStatus ===1 ? "redheart-icon " :"heart-icon-outl " ;

    return(
      <div className="feed-footer">
        <div className="article-actions">
          <div className="left-actions">

            <div aria-label="button">
              <a href="#action-like" onClick={likeAction} ><div className={ displayLiked + "is24by24"}></div></a>
            </div>

            <div aria-label="button"><a href="#action-comment"><div className="comment-icon-outl is24by24"></div></a></div>
            <div aria-label="button"><a href="#action-share"><div className="direct-icon-outl is24by24"></div></a></div>
          </div>
          <div className="right-actions">
            <div aria-label="button"><a href="#action-like"><div className="tag-icon-outl is24by24"></div></a></div>
          </div>

        </div>
        <div className="feed-likes"><strong>{_like}</strong></div>
        <div  className="caption" style={{display:displayCaption}}>
        <a href="#user" aria-label="user-profile">
          <strong className="">{username}</strong>
        </a>
        <span>{" " + caption}</span>
        </div>
      </div>
  );
}
export default Footer;
