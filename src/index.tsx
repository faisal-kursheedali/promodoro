import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ActionProvider from './context/action-context';
import AppContextProvider from './context/app-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ActionProvider>
        <AppContextProvider>
        <App />
        </AppContextProvider>
      </ActionProvider>
    </Router>
  </React.StrictMode>
);

