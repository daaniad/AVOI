import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogInContextProvider } from "./contexts/AuthContext/loginContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
    <LogInContextProvider>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </LogInContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
