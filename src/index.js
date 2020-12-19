import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

import reducer from './Reducers'
import middleware from './middleware'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
