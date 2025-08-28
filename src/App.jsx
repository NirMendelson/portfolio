import React from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './components/ProjectDetail'
import Projects2Page from './components/Projects2Page';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  // Track page views for analytics
  useAnalytics();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="App min-h-screen flex items-center justify-center bg-background text-foreground">
            <Home />
          </div>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects2" element={<Projects2Page />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
