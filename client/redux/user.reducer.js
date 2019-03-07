export default function user(state = {}, action) {
  console.log("called", action);
  switch (action.type) {
    case "USER":
      return { user: action.payload };
    default:
      return state;
  }
}
