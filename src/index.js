import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const tick = ()=>
{
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

setInterval(tick, 1000);
reportWebVitals();