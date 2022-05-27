import React from "react";
import { render } from "react-dom";
import App from "./App";

import "./i18n";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { taskReducer } from "./redux/reducers/tasks.reducer";

const rootReducer = combineReducers({ taskReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
const root = document.querySelector("#root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
