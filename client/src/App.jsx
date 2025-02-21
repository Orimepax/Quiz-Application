import { useState } from 'react'
import viteLogo from '/vite.svg'
import './style/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  Start  from './components/Start'
import  Quiz  from './components/Quiz'
import  Result  from './components/Result'
import { CheckUserExist } from './helper/helper'

CheckUserExist()

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<CheckUserExist><Quiz /></CheckUserExist>} />
        <Route path="/result" element={<CheckUserExist><Result /></CheckUserExist>} />
      </Routes>
    </Router>
  </>
)
}

export default App
