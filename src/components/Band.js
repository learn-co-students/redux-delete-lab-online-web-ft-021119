import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        Name: {this.props.band.name}
        <button onClick={() => {this.props.removeBand(this.props.band.name)}}>Delete</button>
      </li>
    );
  }
};

export default Band;
