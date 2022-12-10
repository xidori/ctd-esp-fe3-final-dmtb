import React from 'react'
import ReactDOM from 'react-dom/client'
import Context from './Context/Context'
import { ThemeProvider } from "./Context/ThemeContext";
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   <ThemeProvider> 
   <Context>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Context> 
    </ThemeProvider>
  </React.StrictMode>  
)
