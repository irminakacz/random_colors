import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textColor: "#000000",
      backgroundColor: "#ffffff",
      textColorHistory: [],
      backgroundColorHistory: [],
      index: 0
    }
    this.randomize = this.randomize.bind(this);
    this.saveCurrentColors = this.saveCurrentColors.bind(this);
    window.addEventListener("keydown", this.randomize);
  }


  componentDidMount() {
    this.saveCurrentColors();
  }


  saveCurrentColors() {
    let newTextColorHistory = this.state.textColorHistory.slice();
    let newBackgroundColorHistory = this.state.backgroundColorHistory.slice();

    newTextColorHistory.push(this.state.textColor);
    newBackgroundColorHistory.push(this.state.backgroundColor);

    this.setState({
      textColorHistory: newTextColorHistory,
      backgroundColorHistory: newBackgroundColorHistory,
    });
  }


  randomize(event) {
    if (event.key === "ArrowRight") {
      if (this.atEndOfHistory()) {
        this.changeToNewColors();
        this.saveCurrentColors();
        this.increaseIndex();
      } else {
        this.increaseIndex();
        this.changeToNextColors();
      }
    } else if (event.key === "ArrowLeft") {
      this.decreaseIndex();
      this.changeToPreviousColors();
    }
  }


  atEndOfHistory() {
    return this.state.index === this.state.textColorHistory.length - 1;
  }


  increaseIndex() {
    let newIndex = this.state.index + 1;
    this.setState({ index: newIndex });
  }


  decreaseIndex() {
    let newIndex = this.state.index;
    if (newIndex > 0) {
      newIndex--;
    }
    this.setState({ index: newIndex });
  }


  changeToNewColors() {
    let newTextColor = this.generateRandomColor();
    let newBackgroundColor = this.generateRandomColor();

    this.setState({
      textColor: newTextColor,
      backgroundColor: newBackgroundColor,
    });
  }


  generateRandomColor() {
    let possible = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++) {
      color += possible.charAt(Math.floor(Math.random() * 16));
    }
    return color;
  }


  changeToNextColors() {
    let newTextColor = this.state.textColorHistory[this.state.index];
    let newBackgroundColor = this.state.backgroundColorHistory[this.state.index];

    this.setState({
      textColor: newTextColor,
      backgroundColor: newBackgroundColor,
    });
  }

  changeToPreviousColors() {
    let newTextColor = this.state.textColorHistory[this.state.index];
    let newBackgroundColor = this.state.backgroundColorHistory[this.state.index];

    this.setState({
      textColor: newTextColor,
      backgroundColor: newBackgroundColor,
    });
  }


  render() {
    document.body.style.backgroundColor = this.state.backgroundColor;
    return (
      <div>
        <p style={{ color: this.state.textColor }}>RANDOM</p>
      </div>
    );
  }
}

export default App;
