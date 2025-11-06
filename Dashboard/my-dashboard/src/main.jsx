import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CookiesProvider } from 'react-cookie';
import './index.css'
import Apps from './Components/Apps.jsx'
import Home from './Components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path='/*' element={<Home></Home>}></Route>
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  </StrictMode>
)
