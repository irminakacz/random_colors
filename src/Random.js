import React, { Component } from 'react';

class Random extends Component {
  render() {
    document.body.style.backgroundColor = this.props.backgroundColor;
    return (
      <div id="text">
        <p>
          <span style={{ color: this.props.textColor[0] }}>RANDOM</span>
          <br />
          { this.props.numberOfColors > 2 &&
            <span style={{ color: this.props.textColor[1] }}>RANDOM</span>
          }
          <br />
          { this.props.numberOfColors > 3 &&
          <span style={{ color: this.props.textColor[2] }}>RANDOM</span>
          }
        </p>
      </div>
    );
  }
}

export default Random;
