export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_BAND':
    return { ...state, bands: [...state.bands, action.name] }


    case 'DELETE_BAND':
    return {bands: state.bands.filter(band => band.id !== action.id)}


    default:
      return state;
  }
};
// const todo = {
//     id: Math.random()*10000000000000000,
//     text: action.payload.text
//   }
//   return { todos: state.todos.concat(todo) };
