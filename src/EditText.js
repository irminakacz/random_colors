import React, { Component } from 'react';

class EditText extends Component {
  render() {
    return (
      <div id="edit-text" className="helper">
        <span>
          <span>
            Text1:
            <input 
              type="text" 
              value={this.props.text[0]}
              onChange={(event) => this.props.handleChange(0, event)}
            />
            <br />
          </span>

          { this.props.numberOfColors > 2 &&
            <span>
              Text2:
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
              Text3:
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
