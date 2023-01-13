import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {FavouriteProvider} from "./contexts/UserContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavouriteProvider>
    <App/>
    </FavouriteProvider>
  </React.StrictMode>,
)
