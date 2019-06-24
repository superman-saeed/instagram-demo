import React from "react";
import SearchGrid from "./SearchGrid.js";
import {getUserPhotos} from "../../lib/Unsplash";



class Search extends React.Component {
  constructor(props){
    super(props);
    this.store = this.props.getState;
    this.setStore = this.props.setState;
    this.mount = true;
  }

  componentDidMount(){
    const {search_feed} = this.store();
    let request;

    if(this.mount && search_feed.length===0){
      getUserPhotos("rpnickson").then((data)=>{
        console.log(data);
         this.setStore({search_feed:data});
      })
     }

  }

  componentWillUnmount(){
    this.mount =false;
  }

  render(){

    return (
      <div className="">
        <div className="grid-container">
        {(this.store().search_feed.length ?
        (<SearchGrid json={this.store().search_feed} />)
         :(<div>loading</div>)

       )}
        </div>
      </div>
    );
  }
}
export default Search;
