import React from "react";
import "../../stylesheets/search.css";

const gridArr =[1,2,3,4,5,6,7]
class Search extends React.Component {

  render(){
    const gElements = gridArr.map((num,key)=>{
      return (<PhotoGrid  num={num} key={key} />);
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

function PhotoGrid(props){
  return(
    <div className="photo-grid">
     <div className="g-photo"><div className="g-one"> 1</div></div>
     <div className="g-photo"><div className="g-one"> 2</div></div>
     <div className="g-photo"><div className="g-one"> 3</div></div>
     <div className="g-photo"><div className="g-one"> 4</div></div>
     <div className="g-photo db-grid">
    <div className="db-inner"><div>6</div></div>
    <div className="db-inner"><div>6</div></div>
    </div>
     <div className="g-photo"><div className="g-one"> 7</div></div>
     <div className="g-photo"><div className="g-one"> 8</div></div>
     <div className="g-photo"><div className="g-one"> 9</div></div>
    </div>
  )

}
