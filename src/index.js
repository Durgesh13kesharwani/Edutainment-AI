// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional if you have a global CSS file
import App from './App'; // Ensure this points to your App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
