import { useUserStore } from "../stores/useUserStore";
import './navbar.css'
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom"
import { useCartStore } from "../stores/useCartStore";
const Navbar = () => {
    const { user, logout } = useUserStore();
    const isAdmin = user?.role === "admin";
<<<<<<< HEAD
    const { cart } = useCartStore();
=======
>>>>>>> f54d068645c7cfc89641b7641f3d50eb7eadd425
  return (
<header className="header">
    <div className="container">
      
        <div className="navbar">
        <Link to="/" className="logo">E-Commerce</Link>
        <nav className="nav-links">
            <Link to={"/"} className="nav-link">Home</Link>
            {user && (
              <Link to="/cart" className="cart-link nav-link">
                <ShoppingCart className='icon-size1' />
               {cart.length}
                <span>Cart</span>
              </Link>
            )}
            {isAdmin && (<Link to={"/secret-dashboard"} className="admin-link">
            <Lock/>
            <span >Dashboard</span>
            </Link>)}

            {user ? (
              <button className="nav-button" onClick={logout}>
                <LogOut/>
                <span>Log Out</span>
              </button>
            ) : (
              <>
                <Link to="/signup" className="nav-button signup-button">
                  <UserPlus />
                  Sign Up
                </Link>
                <Link to="/login" className="nav-button">
                  <LogIn/>
                  Login
                </Link>
              </>
            )}

        </nav>
        </div>
    </div>

</header>
  )
}

export default Navbar
