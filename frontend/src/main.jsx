import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { OrganizationProvider } from './context/OrganizationContext';
import { Toaster } from './components/ui/sonner';

import { GoogleOAuthProvider } from '@react-oauth/google';

// Debug: Verify Google Client ID is loaded from environment
console.log('VITE_GOOGLE_CLIENT_ID:', import.meta.env.VITE_GOOGLE_CLIENT_ID);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <OrganizationProvider>
        <App />
        <Toaster />
      </OrganizationProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
