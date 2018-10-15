import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import promise from "redux-promise"

import App from './components/App'
import rootReducer from "./reducers"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render((
  <Provider className="provider" store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
), document.getElementById('root'));