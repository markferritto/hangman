import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";

/**
 * Application entry point that sets up:
 * 
 * 1. React rendering to the DOM
 * 2. Redux Provider to make the store available throughout the component tree
 * 
 * The Provider component is crucial - it uses React's Context API to make
 * the Redux store accessible to any nested component that needs to access
 * the Redux state or dispatch actions.
 * 
 * This is similar to dependency injection in enterprise applications,
 * making a shared resource available throughout the system.
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </React.StrictMode>
);
