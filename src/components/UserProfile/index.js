import React from "react";
import UserDetails from "./UserDetails";
import PhotoAlbum from "./PhotoAlbum";
import {Consumer} from "../App/context";
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
    console.log(this.path);
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
        <Consumer>
          { state=> {
          const person= state.pages_feed.filter((page)=>
            (page.user.username === this.path));
            const info = person.length ?
            person[0].user:
            {name:"loading name", bio:"bio",username:"unknown"};
            console.log(person[0]);
            return (<UserDetails info={info} />)}
          }
        </Consumer>
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
