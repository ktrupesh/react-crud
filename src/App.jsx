import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Addmin from './components/Addmin'
import Dashboard from './components/Dashboard'
import Allproduct from './components/product/Allproduct'
import Addproduct from './components/Addproduct'
import Deleteproduct from './components/Deleteproduct'
import Editproduct from './components/Editproduct'
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Addmin />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/allproduct' element={<Allproduct />} />
            <Route path='/deleteproduct/:id' element={<Deleteproduct/>} />
            <Route path='/editproduct/:id' element={<Editproduct/>} />
            <Route path='/addproduct' element={<Addproduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;