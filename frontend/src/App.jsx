import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import CollectionPage from './pages/CollectionPage/CollectionPage'
import Cart from './pages/Cart/Cart'

function App() {

  return (
    <>
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign_in' element={<LoginPage />} />
            <Route path='/collection/:category' element={<CollectionPage />} />
            {/* <Route path='/cart' element={<Cart />} /> */}
          </Routes>
        </div>
    </>
  )
}

export default App
