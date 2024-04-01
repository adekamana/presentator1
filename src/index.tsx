import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Loader from './components/Loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // TODO: Добаваить лоадер
  <Suspense fallback={<Loader/>}>
    <App/>
  </Suspense>

);
