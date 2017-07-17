import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';

window.login = login;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
