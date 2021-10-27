import React from "react";
import ReactDOM from "react-dom";
import "./libs/Assest/Style/bootstrap.min.css";
import "antd/dist/antd.css";
import "./libs/Assest/Style/app.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
