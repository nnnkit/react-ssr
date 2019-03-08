import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./Header";

const App = ({ route }) => {
  return (
    <div>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default {
  component: App
};
