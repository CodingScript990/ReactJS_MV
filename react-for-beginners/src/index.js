import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
/* 
  [add npm]
  - react-router-dom@5.3.0
  - gh-pages
  [pakage.json add]
  - "homepage": "https://(github name).github.io/(project name)"
  - scripts >> 
    1. "deploy": "gh-pages -d build"
    2. "predeploy": "npm run build"
*/
reportWebVitals();
