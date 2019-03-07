import axios from "axios";

export const fetchUser = () => dispatch => {
  console.log("called");
  return axios.get("https://api.github.com/users/praveen-me").then(info => {
    dispatch({
      type: "USER",
      payload: info.data
    });
  });
};
