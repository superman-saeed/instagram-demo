import React from "react";
import "../stylesheets/search.css";

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
  const {p,num} = props;
  return(
    <div className="photo-grid">
     <ThreeGrid num={1}/>
     <LeftGrid />
     <MiddleGrid />
     <ThreeGrid num={4}/>
    </div>
  )

}

function ThreeGrid(props){
  return(
    <div className="small-g">
      <div class="sg-inner">
        <div class="fthree-glid">{props.num}</div>
        <div class="fthree-glid">{props.num}</div>
        <div class="fthree-glid">{props.num}</div>
      </div>
    </div>
  );
}

function MiddleGrid(props){
  return(
    <div className="big-g">
    <div className="sg-inner">
      <div className="fone-grid">3</div>
    </div>
    </div>
  );
}
function LeftGrid(props){
  return(
    <div className="left-g">
    <div className="inner">
      <div className="ftwo-glid">2</div>
      <div className="ftwo-glid">2</div>
    </div>
    </div>
  );
}
