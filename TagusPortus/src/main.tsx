//Dependencies 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages Imports
import AppLayout from './assets/components/AppLayout.tsx'
import ScrollToTop from "./assets/components/ScrollToTop.tsx"
import Home from './assets/pages/Home.tsx'
import About from './assets/pages/About.tsx'

//Style Sheets imports
import '/src/app.css'
import '/src/animations.css'
import '/src//mediaQueries.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
