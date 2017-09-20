import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div>

      <div id="big-instruction" className="helper">
        <table id="table">
          <tr>
            <td>
              <div id="left" onClick={this.props.handleLeftArrowClick}>
                &lt;- previous color set
              </div>
            </td>
            <td>
              <div id="center"> |
                <div> 2 </div> |
                <div> 3 </div> |
                <div> 4 </div> |
              </div>
            </td>
            <td>
              <div id="right" onClick={this.props.handleRightArrowClick}>
                next color set -&gt;
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div id="small-instruction" className="helper">
        <table id="table">
          <tr>
            <td>
              <div id="left" onClick={this.props.handleLeftArrowClick}>
                &lt;- previous color set
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="center"> |
                <div> 2 </div> |
                <div> 3 </div> |
                <div> 4 </div> |
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="right" onClick={this.props.handleRightArrowClick}>
                next color set -&gt;
              </div>
            </td>
          </tr>
        </table>
      </div>

      </div>
    );
  }
}

export default Instructions;
