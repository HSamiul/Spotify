import './styles/index.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './routes/login';
import Profile from './routes/profile';
import Nothing from './routes/nothing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path = '/profile' element={<Profile />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '*' element={<Nothing />} />
      </Route>
    </Routes>
  </BrowserRouter>
);