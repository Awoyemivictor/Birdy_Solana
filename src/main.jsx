import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./utils/ContextProvider";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
