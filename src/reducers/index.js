export default function(state = [], action = {}) {
  switch (action.type) {
    case 'SET_COLORS':
      return action.payload;
    default:
      return state;
  }
}
