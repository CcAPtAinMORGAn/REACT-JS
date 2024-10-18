import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// // FOR IMPORTING FUNCTION FILE FROM Car.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Car from './Car.js';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

// *****************************//

// // FOR IMPORTING FUNCTION FILE FROM Football.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Football from './Football.js';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football/>);

// // FOR IMPORTING FUNCTION FILE FROM Goal.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Goal from './Goal.js';
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Goal isGoal={false}/>);
// //FOR TRUE CONDITION IN GOAL FUNCTION
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true}/>);

// // FOR IMPORTING FUNCTION FILE FROM Garage.js USING LOGICAL && OPERATOR.
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Garage from './Garage.js';
// const cars = ['Ford','BMW','AUDI'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars}/>);

// // FOR IMPORTING FUNCTION FILE FROM Garage.js USING REACT LISTS
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Garage from './Garage.js';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);


