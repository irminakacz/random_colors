import React, { Component } from 'react';
import Instructions from './Instructions';
import Random from './Random';
import Colors from './Colors';
import EditText from './EditText';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ["RANDOM", "COLOR", "SET"],
      numberOfColors: 4,
      textColor: ["#FAEAB8", "#F70B82" ,"#E2942D"],
      backgroundColor: "#932B0D",
      textColorHistory: [["#FAEAB8", "#F70B82" ,"#E2942D"]],
      backgroundColorHistory: ["#932B0D"],
      index: 0
    }

    this.randomize = this.randomize.bind(this);
    this.generateNewColorsAndAddThemToHistory = 
      this.generateNewColorsAndAddThemToHistory.bind(this)
    this.handleGoingForward = this.handleGoingForward.bind(this);
    this.handleGoingBackward = this.handleGoingBackward.bind(this);
    this.chooseNumberOfColors = this.chooseNumberOfColors.bind(this);
    this.changeText = this.changeText.bind(this);

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
    let newTextColor = [];
    newTextColor.push(this.generateRandomColor());
    newTextColor.push(this.generateRandomColor());
    newTextColor.push(this.generateRandomColor());
    let newBackgroundColor = this.generateRandomColor();

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

  chooseNumberOfColors(event) {
    const clickedNumber = event.target;
    const newNumberOfColors = clickedNumber.textContent;
    this.highlightClickedNumber(clickedNumber);
    this.setState({
      numberOfColors: newNumberOfColors
    });
  }

  highlightClickedNumber(node) {
    const parent = node.parentNode;
    let siblings = parent.childNodes;
    siblings.forEach(node => {
      if (node.className) {
        node.className = node.className.replace("highlight", "");
      }
    });
    node.className += "highlight";
  }

  changeText(textNumber, event) {
    let newText = this.state.text.slice();
    if (event.target.value.length < 12) {
      newText[textNumber] = event.target.value;
      this.setState({
        text: newText
      })
    }
  }

  render() {
    return (
      <div>

        <Instructions
          handleRightArrowClick={this.handleGoingForward}
          handleLeftArrowClick={this.handleGoingBackward}
          handleChangingColor={this.chooseNumberOfColors}
        />

        <Random 
          text={this.state.text}
          backgroundColor={this.state.backgroundColor}
          textColor={this.state.textColor}
          numberOfColors={this.state.numberOfColors}
        />

        <Colors
          backgroundColor={this.state.backgroundColor}
          textColor={this.state.textColor}
          numberOfColors={this.state.numberOfColors}
        />

        <EditText
          text={this.state.text}
          numberOfColors={this.state.numberOfColors}
          handleChange={this.changeText}
        />

      </div>
    );
  }
}

export default App;
