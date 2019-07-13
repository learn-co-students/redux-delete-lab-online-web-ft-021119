import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        Name: {this.props.band}
        <button onClick={() => {this.props.removeBand(this.props.band)}}>Delete</button>
      </li>
    );
  }
};

export default Band;
