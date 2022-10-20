import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevprops, prevState){
        // console.log(prevprops);
        // console.log(this.props.number);
        if(prevprops !== this.props.number){
              console.log("Component Updated");
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
