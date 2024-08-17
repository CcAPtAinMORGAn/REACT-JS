// // IMPORTING COMPONENT 1 FOR UseState application problem to understand use Context in index.js
// import ReactDOM from "react-dom/client";
// import Component1 from './App.js';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);

// // UseContext application in index.js
// import ReactDOM from "react-dom/client";
// import Component1 from './App.js';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);

// //useContext dark theme in index.js
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);