import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Global } from "./lib/styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
