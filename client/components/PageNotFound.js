import React, { Component } from "react";

const PageNotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <div>Page Not Found</div>;
};

export default {
  component: PageNotFound
};
