import React, { Component } from 'react';

class Colors extends Component {
  render() {
    return (
      <div id="colors" className="helper">
        <span>
          <span>Text1: { this.props.textColor[0] }<br /></span>
          { this.props.numberOfColors > 2 &&
            <span>Text2: { this.props.textColor[1] }<br /></span>
          }
          { this.props.numberOfColors > 3 &&
            <span>Text3: { this.props.textColor[2] }<br /></span>
          }
          <span>Background:{ this.props.backgroundColor }</span>
        </span>
      </div>
    );
  }
}

export default Colors;
