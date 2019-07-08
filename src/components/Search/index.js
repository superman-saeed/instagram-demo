import React from "react";
import SearchGrid from "./SearchGrid.js";




class Search extends React.Component {
  constructor(props){
    super(props);

    this.mount = true;
  }

  componentDidMount(){

    if(this.mount && true){

     }

  }

  componentWillUnmount(){
    this.mount =false;
  }

  render(){

    return (
      <div className="">
        <div className="grid-container">

        </div>
      </div>
    );
  }
}
export default Search;
