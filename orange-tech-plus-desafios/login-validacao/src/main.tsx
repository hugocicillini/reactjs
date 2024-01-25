import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Login/Login.tsx'
import GlobalStyle from "./Global.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
