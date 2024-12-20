
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'

import CategoryPage from "./pages/CategoryPage"

import Navbar from './components/Navbar'


function App() {

  return (
    <div className='page-container'>
      <div className='background-gradient'>
        <div className='gradient-layer'></div>
      </div>
      <div className="content">
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<SignUpPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>

    <Route path='/category/:category' element={<CategoryPage />} />
    </Routes>
    </div>
    </div>


  )
}

export default App
