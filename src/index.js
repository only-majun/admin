import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'utils/axios'
import RootRouter from './router'
import Store from './store/store'
import {Provider} from 'react-redux'
React.Component.prototype.$axios=axios
ReactDOM.render(
<Provider store={Store}>
  <RootRouter />  
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
