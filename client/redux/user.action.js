import axios from "axios";

export const fetchUser = () => dispatch => {
  return axios.get("https://api.github.com/users/praveen-me").then(info => {
    dispatch({
      type: "USER",
      payload: info.data
    });
  });
};
