import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { NotFound } from './pages/NotFound'
import { Detailed } from './pages/Detailed'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path="/post/:id" element={<Detailed />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
