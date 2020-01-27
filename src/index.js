import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './services/reducers'
import './styles/global.scss';
import Main from './Main';

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
      <Main />
  </Provider>,
  document.getElementById('root')
);
