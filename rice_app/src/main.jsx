import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./styles/theme.css"
import "./index.css"




import { AuthProvider } from './store/context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> {/*provides user login status and role to components */}
      <App />  {/*children component for authProvider */}
     </AuthProvider>
   </BrowserRouter>
  </StrictMode>,
)