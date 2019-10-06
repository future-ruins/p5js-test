import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  // Color ids are generated and color changes are recorded in local state of App
  constructor(props) {
    super(props);
    this.state = {
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    };
    this.randomColor = this.randomColor.bind(this);
  }

  // action sets new color and dispatches that data to redux store
  randomColor() {
    this.setState({
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    });
    store.dispatch({
      type: 'SET_COLORS',
      payload: this.state.color,
    });
  }

  // In the render function color is this.state.color
  render() {
    return (
      <Provider store={store}>
        <div>
          <button onClick={this.randomColor}>Random Color</button>
          <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
        </div>
      </Provider>
    );
  }
}

export default App;
