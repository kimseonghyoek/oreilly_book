import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let colorArray = [
  { title : "과격한 빨강"},
  { title : "잔디"},
  { title : "파티 핑크"}
]

const addColor = (title, array) => array.concat({title})

console.log(addColor("매력적인 초록", colorArray).length)
console.log(colorArray.length)

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
