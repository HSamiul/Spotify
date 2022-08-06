import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);