import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import './utils/in8n/index.js';
import App from './App.jsx'
import LeyndContextProvider from './context/LeyndContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LeyndContextProvider>
          <App />
      </LeyndContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
