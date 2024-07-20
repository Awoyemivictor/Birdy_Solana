// 1. Imports the main React library, which is necessary for using JSX and creating React components.
import React from "react";
// 2. Imports the ReactDOM library, which is used to interact with the DOM and render React components.
import ReactDOM from "react-dom/client";
// 3. Imports the ContextProvider component from the utils directory. This is likely a context provider for managing global state in your application.
import ContextProvider from "./utils/ContextProvider";
// 4. Imports the main App component from the App.jsx file. This is the root component of your application, where other components will be nested.
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
