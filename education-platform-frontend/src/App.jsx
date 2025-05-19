import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { SignUp } from './pages/signup/SignUp'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App
