import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/index'

ReactDOM.render(
  <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </StrictMode>  ,
  document.getElementById('root')
);

serviceWorker.unregister();
