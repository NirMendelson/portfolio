import React from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import ProjectsPage from './components/ProjectsPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="App min-h-screen flex items-center justify-center bg-white text-gray-800">
            <Home />
          </div>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
