import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '../src/components/css/style.css';
import '../src/components/css/media.css'
import '../src/components/css/home.css'
import '../src/components/css/pages.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)