import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

setInterval(logColcTime, 1000);

function logColcTime() {
  
  // 현재 시각을 상용사로 표현하는 문자열을 얻는다.
  var time = getClockTime();

  // 콘솔을 지우고 시간을 로그에 남긴다.
  console.clear();
  console.log(time);
}

function getClockTime() {

  // 현재 시각을 얻는다.
  var date = new Date;
  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM"
  }

  // 상용시로 변환한다,
  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }

  // 시간을 2글자로 만들기 위해 앞에 0을 붙인다.
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }

  // 분을 2글자로 만들기 위해 앞에 0을 붙인다.
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }

  // 초를 2글자로 만들기 위해 앞에 0을 붙인다,
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }

  // "hh:mm:ss tt" 형식의 분자열을 반들다.
  return time.hours + ":" + time.minutes + ":" + time.seconds + time.ampm;
}

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
