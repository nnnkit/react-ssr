import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import React from "react";
import Routes from "../client/Routes";

export const renderer = (path, store, context) => {
  const jsx = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
  <html>
    <body>
      <div id="root">${jsx}</div>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
      </script>
      <script src="client.bundle.js"></script>
    </body>
  <html>
  `;
};
