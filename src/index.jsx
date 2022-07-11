import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Global from './lib/styled';
import { DataProvider } from './context/context';
import './fonts/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
