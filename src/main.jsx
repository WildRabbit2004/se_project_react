import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./vendor/normalize.css";
import "./blocks/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
