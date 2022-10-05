import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
body {
  
  width: 100vw;
  min-height: 100vh;
  //background-color:purple;
  //background-image: linear-gradient(to bottom right, #69c0ff 0%, #67eb8f 100%);
}

*,
*::before,
*::after{
 // margin: 0;
 // padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
