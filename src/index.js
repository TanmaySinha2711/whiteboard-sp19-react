import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./containers/home"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <div className = "container-fluid">
      <Home/>
  </div>,
  document.getElementById('root')
);
