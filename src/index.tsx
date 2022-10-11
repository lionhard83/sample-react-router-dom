import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Wrapper } from './components/Wrapper';
import { SampleUseReducer } from './components/SampleUseReduces';

// HTMLElement ? -> Tag html <div></div>
const root = ReactDOM.createRoot( // un punto di accesso di React al nostro dom
  document.getElementById('root') as HTMLElement
);


root.render(
  <Wrapper></Wrapper>
  // <SampleUseReducer></SampleUseReducer>

  // Creare una lista da mockaroo, creare il componente Person, iterare person con i person di mokaroo, definire bene i tipi, 
  // provare a riprodurre la UI indicata in immagina

  // ghost div
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
