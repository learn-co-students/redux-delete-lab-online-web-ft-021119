import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux';

class BandsContainer extends Component {
 theBands = () => this.props.bands.map(band => <Band key={band.id} id={band.id} name={band.name} delete={this.props.deleteBand} />)
		




  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.theBands()}

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND",id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
