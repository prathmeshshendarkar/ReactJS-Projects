import React from "react";
import ChildComponent from './ChildComponent';

export default class ParentComponent extends React.Component {
  constructor(){
    super();
    // console.log(this);
    // this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      count: 0,
    }
  }

  onClickHandler(){
    console.log("I am here");
    this.setState((prevCount) => {
      return {
        count: prevCount.count + 1,
      }
    })
    // this.setState({count: 1});
  }

  render() {
    // console.log(this.onClickHandler);
    console.log(this.state.count);
    console.log("I am here");
    return(
      <>
        <h1>Parent Component</h1>
        <ChildComponent onClickHandler={this.onClickHandler.bind(this)} />
      </>
    )
  }
}
