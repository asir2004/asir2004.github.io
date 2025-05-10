import './App.css'
import { ProjectsPage, ContactPage, ProcessPage, MainPage } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className='relative'>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects/" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectsPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/process/" element={<ProcessPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App