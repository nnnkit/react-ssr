import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import thunk from "redux-thunk";
import user from "./redux/user.reducer";

const initialState = window.INITIAL_STATE;

const store = createStore(user, initialState, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
