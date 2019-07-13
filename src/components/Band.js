import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>
          {this.props.band}
          <button onClick={() => (this.props.deleteBand(this.props.band.id))}>delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
