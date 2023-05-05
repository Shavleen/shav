import React from 'react';

//line had to removed causing issues
//import ReactDOM from 'react-dom/client';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//this was added making it accessible
import { BrowserRouter } from "react-router-dom";

//const root = ReactDOM.createRoot(document.getElementById('root'));

//makes the router features accessible
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


/*This the orignal code that was there that had to be replaced

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
