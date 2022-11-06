import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import TobuyAdd from './pages/TobuyAdd'
import TobuyList from './pages/TobuyList'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TobuyList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<TobuyAdd />} />
          <Route path="*" element={<TobuyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
