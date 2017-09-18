import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div id="instruction" className="helper">
        <span id="left" onClick={this.props.handleLeftArrowClick}>
          &lt;- previous color set
        </span>
        <span id="right" onClick={this.props.handleRightArrowClick}>
          next color set -&gt;
        </span>
      </div>
    );
  }
}

export default Instructions;
