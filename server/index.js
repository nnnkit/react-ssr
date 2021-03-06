import express from "express";
import { createStore, applyMiddleware } from "redux";
import { renderer } from "./../helper/renderer";
import { matchRoutes } from "react-router-config";
import user from "../client/redux/user.reducer";
import thunk from "redux-thunk";
import Routes from "../client/Routes";
const app = express();

app.use(express.static("dist"));
app.get("*", (req, res) => {
  const store = createStore(user, applyMiddleware(thunk));
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : Promise.resolve(null);
  });
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req.path, store, context);
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3030, () => {
  console.log(`Server started ar post 3030`);
});
