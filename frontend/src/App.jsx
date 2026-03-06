import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {

  return (
    <>
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign_in' element={<LoginPage />} />
          </Routes>
        </div>
    </>
  )
}

export default App
