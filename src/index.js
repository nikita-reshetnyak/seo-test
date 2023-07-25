import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
// import { hydrate, render } from 'react-dom';

// const root = document.getElementById('root');
// if (root.hasChildNodes()){
//     hydrate(<BrowserRouter>
//         <App />
//        </BrowserRouter>, root)
// } else {
//     render(<BrowserRouter>
//         <App />
//        </BrowserRouter>, root)
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
    <App />
   </BrowserRouter>
);
// console.log(root)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
