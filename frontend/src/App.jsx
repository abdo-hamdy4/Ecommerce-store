import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'

<<<<<<< HEAD

=======
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
>>>>>>> f54d068645c7cfc89641b7641f3d50eb7eadd425
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
<<<<<<< HEAD
import CategoryPage from "./pages/CategoryPage";
=======
>>>>>>> f54d068645c7cfc89641b7641f3d50eb7eadd425



function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (checkingAuth) return <LoadingSpinner />;


  return (
    <div className='page-container'>
      <div className='background-gradient'>
        <div className='gradient-layer'></div>
      </div>
      <div className="content">
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to='/' />} />
    <Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} />
    <Route path='/secret-dashboard' element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login' />}/>
    <Route path='/category/:category' element={<CategoryPage />} />
    </Routes>
    </div>
    <Toaster/>
    </div>


  )
}

export default App
