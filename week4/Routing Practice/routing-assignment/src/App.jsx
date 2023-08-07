import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import WordNumber from './components/WordNumber'
import ColorWord from './components/ColorWord'

function App() {

  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:numword' element={<WordNumber />}/>
        <Route path='/:word/:txtcolor/:bckcolor' element={<ColorWord />}/>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
