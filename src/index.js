import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const countdown = (value, fn, delay=1000) => {
  fn(value)
  return (value > 0) ?
    setTimeout(() => countdown(value-1, fn), delay) :
    value
}

const log = value => console.log(value)
countdown(10, log)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
