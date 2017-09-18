import React, { Component } from 'react';

class Random extends Component {
  render() {
    document.body.style.backgroundColor = this.props.backgroundColor;
    return (
      <div>
        <p style={{ color: this.props.textColor }}>RANDOM</p>
      </div>
    );
  }
}

export default Random;
