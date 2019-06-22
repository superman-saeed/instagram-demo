import React from "react";
import UserDetails from "./UserDetails";
import PhotoAlbum from "./PhotoAlbum";
import {Consumer} from "../App/context";
/*
 user component => photo isgrid,p single photo colectiond, photo istags, bookmarks
*/

const FindComponentInfo=(state, context)=>{
  const person= state.pages_feed.filter(
    (page)=>{
      return   (page.user.username === context.path);
    })

    const info = person.length ?
    person[0].user:
    {
      name:"loading name",
     bio:"bio",
     username:"unknown",
     profile_image:{small:null,medium:null}
   };
    console.log(person[0]);

    return(<UserDetails info={info} />)
}

class User extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isgrid:true,
      istags:false,
      iscollection:false,
      gridPhotos:[]
    }
    this.path = this.props.match.params.id;
    console.log(this.path);
    this.setStore =this.setStore.bind(this);
    this.getStore =this.getStore.bind(this);
  }

  // tabs for user profile
  tabClicked=(e)=>{
    e.preventDefault();
    switch (e.currentTarget.hash) {

      case "#grid":
          this.setState({
            isgrid: true,
            istags:false,
            iscollection:false,
          });
        break;

      case "#list":
        this.setState({
          isgrid: false,
          istags:false,
          iscollection:true,
        });
        break;
      case "#tags":
        this.setState({
          isgrid: false,
          istags:true,
          iscollection:false,
        });

        break;
      default:

    }

  }

setStore=(obj)=>{
   return this.setState(obj);
}
getStore(){
  return this.state;
}
  render(){

    return (
      <div>
        <Consumer>
          { state=> {
            return (FindComponentInfo(state,this))}
          }
        </Consumer>
        <PhotoAlbum
          userRoute={this.path}
          tabClicked={this.tabClicked}
          getState={this.getStore}
          setState ={this.setStore}

        />
      </div>
    );
  }
}

export default User;
