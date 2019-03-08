import React from "react";
import Home from "./pages/Home";
import Users, { loadData } from "./pages/Users";
import App from "./components/App";

export default [
  {
    ...App,
    path: "/",
    routes: [
      {
        ...Home,
        path: "/",
        exact: true
      },
      {
        ...Users,
        path: "/users"
      }
    ]
  }
];
