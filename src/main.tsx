import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import './index.css'
import ErrorPage from './pages/Error';
import Car from './pages/Car';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/model-s' element={<Car />}></Route>
        <Route path='/model-3' element={<Car />}></Route>
        <Route path='/model-x' element={<Car />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
