import './App.css'
import { ProjectsPage, ContactPage, ProcessPage } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <div className='relative'>
        <Routes>
          <Route path="/projects/" element={<ProjectsPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/process/" element={<ProcessPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App