import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import ContextState from './Components/Context/ContextState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextState>
    <App />
  </ContextState>,
)
