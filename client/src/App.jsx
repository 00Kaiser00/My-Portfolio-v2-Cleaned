import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; 

//Dashboard
import Dashboard from './components/Dashboard/Dashboard.jsx';

//Projects
import Projects from './components/Projects/Projects.jsx';

//NavBar
import NavBar from './components/NavBar/NavBar.jsx';

//Footer
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='bg-gradient-to-r from-gray-400 to-gray-100 min-h-screen flex flex-col'>
        <div className="flex-1 overflow-y-hidden flex-basis-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </BrowserRouter>
  )
}

export default App
