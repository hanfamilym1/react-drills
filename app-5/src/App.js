import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Image 
        myImage={'https://i.kym-cdn.com/photos/images/original/000/369/488/61d.jpeg'}/>
      </div>
    );
  }
}

export default App;
