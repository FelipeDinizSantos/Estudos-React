import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const tick = ()=>
{
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

setInterval(tick, 1000)

reportWebVitals();