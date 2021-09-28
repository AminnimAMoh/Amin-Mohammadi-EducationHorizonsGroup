import "@babel/polyfill";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = lazy(() => import("./App"));

ReactDOM.hydrate(
  <Suspense fallback={"Loading..."}>
      <App />
  </Suspense>,
  document.getElementById("root")
);
