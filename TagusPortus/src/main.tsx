import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './assets/components/AppLayout.tsx'

import '/src/app.css'
import '/src/animations.css'
import '/src//mediaQueries.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
