import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PhotoGrid from "./ProfileGrid";
/*
 user component => photo grid,p single photo colectiond, photo tags, bookmarks
*/

class User extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      grid:true,
      tags:false,
      collection:false
    }
  }

  dir=(e)=>{
    e.preventDefault();
    switch (e.currentTarget.hash) {

      case "#grid":
          this.setState({
            grid: true,
            tags:false,
            collection:false,
          });
        break;

      case "#list":
        this.setState({
          grid: false,
          tags:false,
          collection:true,
        });
        break;
      case "#tags":
        this.setState({
          grid: false,
          tags:true,
          collection:false,
        });

        break;
      default:

    }

  }

  render(){
    return (
      <div>
      <UserDetails />
      <Photos click={this.dir} path={this.state}/>
      </div>
    );
  }
}


function Photos({click,path}){
  const {grid,tags,collection} =path;


return(
<div>
  <div className="photo-line bborder">
    <div><a href="#grid" onClick={(e)=>click(e)}><FontAwesomeIcon icon="th" size="lg" /></a></div>
    <div><a href="#list" onClick={(e)=>click(e)}><FontAwesomeIcon icon="bookmark" size="lg" /></a></div>
    <div><a href="#tags" onClick={(e)=>click(e)}><FontAwesomeIcon icon="id-card-alt" size="lg" /></a></div>
  </div>
      {grid ? <PhotoGrid /> : null}
      {collection ?  <div><h4>You have not been tag in any photo</h4></div> : null}
      {tags ? <div><h4>No Photos of you</h4></div> : null}
</div>)
}





function UserDetails(props){
  return(
    <div>
    <div className="user top-bar">
      <a href="#addUser"><FontAwesomeIcon pull="left" icon="cogs" size="lg" /></a>
      <h3>User</h3>
      <a href="#addUser"><FontAwesomeIcon icon="user-plus" size="lg" /></a>
    </div>

    <div className="user-details">
     <div className="user-pic">
     <span className="my-story">
     <FontAwesomeIcon icon="plus-circle" size="sm" />
     </span></div>
     <div className="user-profile">
      <div><h2>1</h2><span>posts</span></div>
      <div><h2>2</h2><span>followers</span></div>
      <div><h2>3</h2><span>following</span></div>
     </div>
     <div className="edit"><button>Edit Profile</button></div>
    </div>
    <div className="name-details">
    <p>Name</p>
    <p>App still in progress</p>
    <p>url</p>
    </div>
    </div>
  )
}
export default User;
