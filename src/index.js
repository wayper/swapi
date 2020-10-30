import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import 'regenerator-runtime/runtime';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import allMyRedusers from './reducers';
// import icrementAsync from './sagas/incrementAsync';

// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   allMyRedusers,
//   composeEnhancers(
//     applyMiddleware(sagaMiddleware),
//   ),
// );

// sagaMiddleware.run(icrementAsync);

ReactDOM.render(
  //<Provider store={store}>
    <App />,
  //</Provider>,
  document.getElementById("root")
);
