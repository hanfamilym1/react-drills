import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Input from './Input.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      message: ''
    }
  }

  handleChange(value){
    this.setState({
      message: value
    })
  }
  
  render(){
      return(
        <div>
          <input onChange={(e) => this.handleChange(e.target.value)}/>
          <p>{this.state.message}</p>
        </div>
      )
    }
    
  
}

export default App;
