import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>
      <span>{this.props.bandName}</span><button onClick={() => this.props.delete(this.props.bandName)}>delete</button>
  </li>

      </div>
    );
  }
};

export default Band;
