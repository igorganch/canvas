import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import canvasobj1 from './images/1 (1).png';
import canvasobj2 from './images/2 (1).png';
import canvasobj3 from './images/3 (2).png';
import canvasobj4 from './images/4 (1).png';
import canvasobj5 from './images/5 (1).png';
import canvasobj6 from './images/6 (1).png';
import final from './images/final.png';


export{
  canvasobj1,
  canvasobj2,
  canvasobj3,
  canvasobj4,
  canvasobj5,
  canvasobj6,
  final

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
