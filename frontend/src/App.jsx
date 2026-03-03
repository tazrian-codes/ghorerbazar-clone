import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
