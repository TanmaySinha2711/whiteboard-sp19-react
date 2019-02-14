import React from 'react';
import ReactDOM from 'react-dom';
import Whiteboard from './components/Whiteboard';
import LoginPanel from './containers/login-panel'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <div className = "container-fluid">
      <LoginPanel/>
  </div>,
  document.getElementById('root')
);
