import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import index from './index.css'
import Rate from './Rate';
import Signup from './Signup';
import reportWebVitals from './reportWebVitals';
import ResetPass from './ResetPass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetPass/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
