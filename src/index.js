import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const compose = (...fns) =>
  (arg) =>
    fns.reduce(
      (composed, f) => f(composed),
      arg
    )

const abstractClockTime = date =>
  ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  })

const civilianHours = clockTime =>
  ({
    ...clockTime,
    hours: (clockTime.hours > 12) ?
    clockTime.hours - 12 : clockTime.hours
  })

const appendAPPM = clockTime =>
  ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM"
  })

const display = target => time => target(time)

const formatClock = format =>
  time =>
    format.replace("hh", time.hours)
      .replace("mm", time.minutes)
      .replace("ss", time.seconds)
      .replace("tt", time.ampm)

const prependZero = key => clockTime =>
  ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
    "0" + clockTime[key] :
    clockTime[key]
  })


const convertToCivilianTime = clockTime =>
  compose(
    appendAPPM,
    civilianHours,
  )(clockTime)

const doubleDigits = civilianTime =>
    compose(
      prependZero("hours"),
      prependZero("minutes"),
      prependZero("seconds")
    )(civilianTime)

const startTicking = () =>
    setInterval(
      compose(
        clear,
        getCurrentTime,
        abstractClockTime,
        convertToCivilianTime,
        doubleDigits,
        formatClock("hh:mm:ss tt"),
        display(log)
      ),
      oneSecond()
    )

startTicking()


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
