import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { updateMocks } from "./utils/utils.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
updateMocks().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

reportWebVitals();
