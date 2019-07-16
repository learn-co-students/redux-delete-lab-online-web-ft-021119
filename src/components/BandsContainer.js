import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
  } 

  render() {
    return (
      <div>
       
        <BandInput addBand={this.props.addBand}/>
        <ul>
         {this.renderBands()}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return{
    delete: id => dispatch({ type: 'DELETE_BAND', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
