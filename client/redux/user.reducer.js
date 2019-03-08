export default function user(state = {}, action) {
  switch (action.type) {
    case "USER":
      return { user: action.payload };
    default:
      return state;
  }
}
