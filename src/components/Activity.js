import React from "react";
import You from "./You";
import Following from "./Following";
import "../stylesheets/activity.css";

// following and me tabs
class Activity extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      hash:"following",
      ftab : "tab",
      ytab: "",
    }

  }
  route=(e)=>{
    e.preventDefault();
    this.element = e.currentTarget;
     switch (e.currentTarget.hash) {
       case "#you":
          this.setState({
            hash:"you",
            ytab:"tab",
            ftab:""});

         break;
         case "#following":
          this.setState({
              hash:"following",
              ytab:"",
              ftab:"tab"});
          break;
       default:

   }
  }
  render(){
    return (
      <div className="activity">
       <div className="activity-nav">
       <ul>
       <li>
       <a className={this.state.ftab}
       href="#following" onClick={this.route}>Following</a>
       </li>
       <li>
       <a className={this.state.ytab}
       href="#you" onClick={this.route}> you</a>
       </li>
       </ul>
       </div>
       <div>
        {(this.state.hash==="following") ? <Following /> : <You />}
      </div>
      </div>
    );
  }

}



export default Activity;
