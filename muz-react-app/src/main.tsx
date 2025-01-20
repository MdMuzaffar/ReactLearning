// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { Store } from "redux";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  // </StrictMode>
);
