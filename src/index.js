import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ages = [21, 18, 42, 40, 64, 63, 34]

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`)
  if (age > max) {
    return age
  } else {
    return max
  }
}, 0)

console.group('maxAge', maxAge);


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
