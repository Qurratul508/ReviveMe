import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Login from './components/Login'
import Signup from './components/Signup'
import { AuthProvider } from './utils/AuthContext'
import { AuthGuard, PublicRoute } from './utils/AuthGuard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Features />
              </main>
            } />
            {/* Protected routes example */}
            <Route path="/dashboard" element={
              <AuthGuard>
                <div>Dashboard (Protected Route)</div>
              </AuthGuard>
            } />
            {/* Public routes example */}
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/signup" element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
