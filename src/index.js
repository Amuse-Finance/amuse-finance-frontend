import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3Provider } from "./components/Context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Web3Provider>
        <App />
      </Web3Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
