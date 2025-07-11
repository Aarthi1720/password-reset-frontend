// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <AuthProvider>
          <App />
    </AuthProvider>
    </BrowserRouter>
  // </StrictMode>,
)
