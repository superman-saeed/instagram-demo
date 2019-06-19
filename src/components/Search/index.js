import React from "react";
import SearchGrid from "./SearchGrid";

const gridArr =[1,2,3,4,5,6,7];

class Search extends React.Component {

  render(){
    const gElements = gridArr.map((num,key)=>{
      return (<SearchGrid  num={num} key={key} />);
    });

    return (
      <div className="">
        <div className="grid-container">
          {gElements}
        </div>
      </div>
    );
  }
}
export default Search;
