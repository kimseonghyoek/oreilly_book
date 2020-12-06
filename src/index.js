import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const colors = [
  {
    id: '-xekare',
    title: "과격한 빨강",
    rating: 3
  },
  {
    id: '-jbwsof',
    title: "큰 파랑",
    rating: 2
  },
  {
    id: '-prigbj',
    title: "회색곰 회색",
    rating: 5
  },
  {
    id: '-ryhbhsl',
    title: "바나나",
    rating: 1
  }
]

const hashColors = colors.reduce(
  (hash, {id, title, rating}) => {
    hash[id] = {title, rating}
    return hash
  },
  {}
)

console.log(hashColors)

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
