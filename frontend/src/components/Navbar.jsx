
import './navbar.css'
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom"
const Navbar = () => {
    const user=false;
    const isAdmin=false;
  return (
<header className="header">
    <div className="container">
        <div className="navbar">
        <Link to="/" className="logo">E-Commerce</Link>
        <nav className="nav-links">
            <Link to={"/"} className="nav-link">Home</Link>
            {user && (
              <Link to="/cart" className="cart-link nav-link">
                <ShoppingCart className="inline-block mr-1" size={20} />
                <span className="hidden sm:inline">Cart</span>
              </Link>
            )}
            {isAdmin && (<Link to={"/secret-dashboard"} className="admin-link">
            <Lock size={20}/>
            <span className="hidden sm:inline">Dashboard</span>
            </Link>)}

            {user ? (
              <button className="button">
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link to="/signup" className="button signup-button">
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link to="/login" className="button">
                  <LogIn className="mr-2" size={18} />
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
