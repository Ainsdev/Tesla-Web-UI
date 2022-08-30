import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/modelS' element={<ModelS />}></Route>
        <Route path='/model3' element={<Model3 />}></Route>
        <Route path='/modelX' element={<ModelX />}></Route>
        <Route path='/modelY' element={<ModelY />}></Route>
        <Route path='*' element={<ErrorPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
