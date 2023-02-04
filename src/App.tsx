import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductAdd from './pages/ProductAdd'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider
        clientId={
          '1077406843971-2mqs7abscmn45n25m009d84bjefq0aq1.apps.googleusercontent.com'
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<ProductAdd />} />
            <Route path="*" element={<ProductList />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  )
}

export default App
