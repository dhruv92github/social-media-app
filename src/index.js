import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import history from "./container/history";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./container/App";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history), 
      thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
