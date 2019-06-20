import React from "react";
import UserDetails from "./UserDetails";
import PhotoAlbum from "./PhotoAlbum";
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
    this.path = this.props.match.params.id;
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

        <PhotoAlbum
          userProps={this.path}
          click={this.dir}
          path={this.state}
        />
      </div>
    );
  }
}

export default User;
