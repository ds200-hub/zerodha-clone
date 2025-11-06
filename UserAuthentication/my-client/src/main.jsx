import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* ye alag alag route pe jane mein help krta hai. 
    bina ishke react ko pta nhi chalta ki dusre route kha hai.*/}
      <CookiesProvider> {/* ye app ke saare components tak cookes ko access krata hai.*/}
        <App />
      </CookiesProvider>
    </BrowserRouter> {/* ishko lagane se pure app ke ander routing enable ho jati hai. kyo app ke ander hi sare components hai.*/}
  </StrictMode>,
);
