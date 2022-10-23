import React from "react"

import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from "./components/Login";
import Home from "./components/Home";
import Pin from "./components/Pin"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pin" element={<Pin />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App