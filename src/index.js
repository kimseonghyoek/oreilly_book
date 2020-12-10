import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`
  const request = new XMLHttpRequest()
  request.open('GET', api)
  request.onload = () =>
  (request.status === 200) ?
  resolves(JSON.parse(request.response).results) :
  rejects(Error(request.statusText))
  request.onerror = (err) => rejects(err)
  rejects.send()
})

const userLogs = userName => message =>
  console.log(`$(userName) -> ${message}`)

const log = userLogs("grandPa23")

log("attempted to load 20 fake members")
getFakeMembers(20).then(
  members => log(`successfully load ${members.length} memebers`),
  error => log("encountered an error loading memebers")
)

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
