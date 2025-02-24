import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App.jsx';

/** Redux Store */
import Store from './Redux/Store.jsx';  
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
