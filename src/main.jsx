import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";
import './index.css'
// import { ProductsProvider } from '../src/context/Context.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HelmetProvider>
       <Router>
      {/* <ProductsProvider> */}
          <App />
          {/* </ProductsProvider> */}
           </Router>
    </HelmetProvider>
  </React.StrictMode>
)
