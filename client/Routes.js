import { Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Users, { loadData } from "./components/Users";

export default [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/users",
    component: Users,
    loadData
  }
];
