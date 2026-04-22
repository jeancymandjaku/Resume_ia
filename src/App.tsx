import './App.css'
import Auth from './pages/Auth'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upload from './pages/Upload';

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <Auth /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App