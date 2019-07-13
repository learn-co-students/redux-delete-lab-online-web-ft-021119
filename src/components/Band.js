import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <li>
          {this.props.name}
        </li>
          <button onClick={() => this.props.deleteBand(this.props.id)}>delete</button>
      </div>
    );
  }
};

export default Band;
