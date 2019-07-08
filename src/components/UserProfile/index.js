import React from "react";
import UserDetails from "./UserDetails";
import PhotoAlbum from "./PhotoAlbum";
/*
 user component => photo isgrid,p single photo colectiond, photo istags, bookmarks
*/

const FindComponentInfo=(state, context)=>{

    return(<UserDetails info={{name:"Saeed", profile_image:null}}/>)
}

class User extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isgrid:true,
      istags:false,
      iscollection:false,

    }
    this.path = this.props.match.params.id;
    console.log(this.path);

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


  render(){

    return (
      <div>
        <UserDetails />
        <PhotoAlbum
          userRoute={this.path}
          tabClicked={this.tabClicked}
          tabState ={this.state}
        />
      </div>
    );
  }
}

export default User;
