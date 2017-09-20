import React, { Component } from 'react';
import Instructions from './Instructions';
import Random from './Random';
import Colors from './Colors';

class App extends Component {
  constructor() {
    super();

    this.state = {
      textColor: "#000000",
      backgroundColor: "#858f92",
      textColorHistory: ["#000000"],
      backgroundColorHistory: ["#858f92"],
      index: 0
    }

    this.randomize = this.randomize.bind(this);
    this.generateNewColorsAndAddThemToHistory = 
      this.generateNewColorsAndAddThemToHistory.bind(this)
    this.handleGoingForward = this.handleGoingForward.bind(this);
    this.handleGoingBackward = this.handleGoingBackward.bind(this);

    window.addEventListener("keydown", this.randomize);
  }


  randomize(event) {
    if (event.key === "ArrowRight") {
      this.handleGoingForward();
    } else if (event.key === "ArrowLeft") {
      this.handleGoingBackward();
    }
  }


  handleGoingForward() {
    if (this.atEndOfHistory()) {
      this.generateNewColorsAndAddThemToHistory();
    } else {
      this.changeToNextColors();
    }
  }


  handleGoingBackward() {
    this.changeToPreviousColors();
  }


  generateNewColorsAndAddThemToHistory() {
    const newTextColor = this.generateRandomColor();
    const newBackgroundColor = this.generateRandomColor();

    const newTextColorHistory = this.state.textColorHistory.slice();
    const newBackgroundColorHistory = this.state.backgroundColorHistory.slice();

    newTextColorHistory.push(newTextColor);
    newBackgroundColorHistory.push(newBackgroundColor);

    const newIndex = this.state.index + 1;

    this.setState({
      textColor: newTextColor,
      backgroundColor: newBackgroundColor,
      textColorHistory: newTextColorHistory,
      backgroundColorHistory: newBackgroundColorHistory,
      index: newIndex
    });
  }


  atEndOfHistory() {
    return (this.state.index === (this.state.textColorHistory.length - 1));
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
    const newIndex = this.state.index + 1;
    let newTextColor = this.state.textColorHistory[newIndex];
    let newBackgroundColor = this.state.backgroundColorHistory[newIndex];

    this.setState({
      textColor: newTextColor,
      backgroundColor: newBackgroundColor,
      index: newIndex
    });
  }

  changeToPreviousColors() {
    let newIndex = this.state.index - 1;
    if (newIndex < 0) {
      newIndex = 0;
    }

    let newTextColor = this.state.textColorHistory[newIndex];
    let newBackgroundColor = this.state.backgroundColorHistory[newIndex];

    this.setState({
      textColor: newTextColor,
      backgroundColor: newBackgroundColor,
      index: newIndex
    });
  }

  render() {
    return (
      <div>

        <Instructions
          handleRightArrowClick={this.handleGoingForward}
          handleLeftArrowClick={this.handleGoingBackward}
        />

        <Random 
          backgroundColor={this.state.backgroundColor}
          textColor={this.state.textColor}
        />

        <Colors
          backgroundColor={this.state.backgroundColor}
          textColor={this.state.textColor}
        />

      </div>
    );
  }
}

export default App;
