import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user.action";

class Users extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    const { user } = this.props;
    return user ? (
      <div>
        <ul>
          <li>{user.name}</li>
          <li>{user.followers}</li>
          <li>{user.following}</li>
        </ul>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}
const mapState = state => {
  return {
    user: state.user
  };
};

function loadData(store) {
  return store.dispatch(fetchUser());
}
export default {
  component: connect(mapState)(Users),
  loadData
};
