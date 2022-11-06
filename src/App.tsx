import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import TobuyAdd from './pages/TobuyAdd'
import TobuyList from './pages/TobuyList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TobuyList />} />
          <Route path="/add" element={<TobuyAdd />} />
          <Route path="*" element={<TobuyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
