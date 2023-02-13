import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./assets/css/index.min.css"
import { Spinner } from './ui/Spinner'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
