//Dependencies 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages Imports
import AppLayout from './assets/components/AppLayout.tsx'
import Home from './assets/pages/Home.tsx'
import About from './assets/pages/About.tsx'
import Works from './assets/pages/Works.tsx'
import Services from './assets/pages/Services.tsx'
import Contacts from './assets/pages/Contacts.tsx'

//Style Sheets imports
import '/src/app.css'
import '/src/animations.css'
import '/src//mediaQueries.css'

// Para utilizar todas as funcionalidades da app, por favor aceder à mesma através de https://tagusportus.netlify.app 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='works' element={<Works />} />
          <Route path='services' element={<Services />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
