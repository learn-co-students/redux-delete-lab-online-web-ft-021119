import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {id: uuid(), name: action.name}
      return { bands: state.bands.concat(band)}

    case 'DELETE_BAND':
      console.log("The action", action)
      let newState = {}
      console.log("The bands", state.bands)
      if (!!action.id) {
        newState = { bands: state.bands.filter(band => band.id !== action.id)}
      } else if (!!action.name) {
        newState = { bands: state.bands.filter(band => band.name !== action.name) }
      }
      return newState
      
    default:
      return state;
  }
};
