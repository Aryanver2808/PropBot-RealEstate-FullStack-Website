import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/600.css"; // Semi-bold
import "@fontsource/inter/700.css"; // Bold
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthProvider } from "./Context/AuthContext"; 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
