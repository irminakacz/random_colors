import React, { Component } from 'react';

class Colors extends Component {
  render() {
    return (
      <div id="colors" className="helper">
        <span>
          Text: { this.props.textColor }<br />
          Background:{ this.props.backgroundColor }
        </span>
      </div>
    );
  }
}

export default Colors;
