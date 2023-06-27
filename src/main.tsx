import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { FontStyles } from './App.styles.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
)
