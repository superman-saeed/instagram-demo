import React from "react";
import PhotoFeed from "./feed";
import {connect} from "react-redux";
import {newfeed} from "../../../redux/actions/feed";
import {listPhotos} from "../../../lib/unsplash";


const getNextPage=(dispatch, pageIndex)=>{
  listPhotos(pageIndex).then((data)=>{
    dispatch(newfeed(data));
    console.log(data);
  });

}

const mapStateToProps = (state) => {
  return {
    state: state.photoFeeds,
  };
}
const mapDispatchToProps = dispatch => {
  return {
   dispatch:(obj) =>dispatch(obj),
  }
}


class Feeds extends React.Component{
  constructor(props){
    super(props);
    this.photoState = this.props.state;
    this.dispatch = this.props.dispatch;
    this.allPhotos = [];
    this.mount=true

  }

  componentDidMount(){
      const pageIndex = (this.photoState.unfeed.length +1)
      if(this.mount){
        getNextPage(this.dispatch, pageIndex);
      }

  }

  componentWillUnmount(){
      this.mount= false;
  }



  render(){
  this.props.state.unfeed.forEach(
    (x)=>x.forEach(
      (data)=> this.allPhotos.push(<PhotoFeed key={data.id} json={data} />)));

   console.log(this.photoState.unfeed);


    return(
      <div>
        {this.allPhotos}
      </div>
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
