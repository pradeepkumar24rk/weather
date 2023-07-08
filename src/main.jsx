import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import photo from './assets/building.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <App />
      <img src={photo} alt="sun" className="building_pic" />
    </div>
  </React.StrictMode>,
)
