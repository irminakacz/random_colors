import React, { Component } from 'react';

class Random extends Component {
  render() {
    document.body.style.backgroundColor = this.props.backgroundColor;
    return (
      <div id="text">
        <p>
          <span style={{ color: this.props.textColor[0] }}>
            {this.props.text[0]}
          </span>
          <br />
          { this.props.numberOfColors > 2 &&
            <span style={{ color: this.props.textColor[1] }}>
            {this.props.text[1]}
            </span>
          }
          <br />
          { this.props.numberOfColors > 3 &&
            <span style={{ color: this.props.textColor[2] }}>
            {this.props.text[2]}
            </span>
          }
        </p>
      </div>
    );
  }
}

export default Random;
