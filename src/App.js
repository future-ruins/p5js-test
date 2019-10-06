import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import './App.css';

class App extends Component {
  // Color ids are generated and color changes are recorded in local state of App
  constructor(props) {
    super(props);
    this.state = {
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    };
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor() {
    this.setState({
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    });
  }

  // In the render function color is this.state.color
  render() {
    return (
      <div>
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
      </div>
    );
  }
}

export default App;
