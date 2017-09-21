import React, { Component } from 'react';

class EditText extends Component {
  render() {
    return (
      <div id="edit-text" className="helper">

        <span>
          <span>
            #1:
            <input 
              type="text" 
              value={this.props.text[0]}
              onChange={(event) => this.props.handleChange(0, event)}
            />
            <br />
          </span>

          { this.props.numberOfColors > 2 &&
            <span>
              #2:
              <input 
                type="text" 
                value={this.props.text[1]}
                onChange={(event) => this.props.handleChange(1, event)}
              />
              <br />
            </span>
          }

          { this.props.numberOfColors > 3 &&
            <span>
              #3:
              <input 
                type="text" 
                value={this.props.text[2]}
                onChange={(event) => this.props.handleChange(2, event)}
              />
              <br />
            </span>
          }
        </span>
      </div>
    );
  }
}

export default EditText;
