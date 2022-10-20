import React, { Component } from 'react'
// import Counter from './Counter';
import Counter1 from './Counter1';

export default class App extends Component {

  constructor(){
         super();
         this.state = {
          count : 0
         }
  }

  componentDidMount(){
    console.log("componentDidMount : When Component render first time");
  }
      increment(){
          this.setState({count : this.state.count +1});
      }

      componentWillUnmount(){
        console.log("componentWillUnmount : Component Removed");
      }
  
  render() {
    return (
      <div>
        <Counter1 number = {this.state.count}></Counter1>
        {/* <button onClick={this.increment.bind(this)}>Click me</button>  */}
           <button onClick={() => {this.increment()}}>Click me</button>
      </div>
    )
  }
}

