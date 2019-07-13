import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <Band band={band} removeBand={this.props.removeBand}/>)
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul> {this.renderBands()} </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  removeBand: name => dispatch({type: "REMOVE_BAND", name})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
