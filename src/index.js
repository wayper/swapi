import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/Main";
import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mainReduser from './reducers/mainReduser';
import fetchPlanetsData from './sagas/fetchPlanetsData';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReduser,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(fetchPlanetsData);

ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
      <Router>
        <CSSReset />
        <Main />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
