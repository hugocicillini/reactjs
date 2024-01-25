import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'

import GlobalStyles from './styles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
