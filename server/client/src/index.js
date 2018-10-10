import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import rootReducer from "./reducers";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render((
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
), document.getElementById('root'));