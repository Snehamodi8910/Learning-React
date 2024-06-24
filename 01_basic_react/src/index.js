import React from 'react';//core foundational library
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//react dom is a tree structure
//react apna dom bnata hai jisko virtual dom bolte hai
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



