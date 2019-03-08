import React from "react";
import Home from "./pages/Home";
import Users, { loadData } from "./pages/Users";
import App from "./components/Header";

export default [
  // {
  //   ...App,
  //   routes: [
  {
    ...Home,
    path: "/",
    exact: true
  },
  {
    ...Users,
    path: "/users"
  }
  //   ]
  // }
];
