
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";
import './loginPage.css'


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading=true;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Create your account</h2>
      </motion.div>

      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="login-label">
              Email address
            </label>
            <div className="login-input-container">
              <Mail className="login-input-icon" aria-hidden="true" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="login-btn">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <div className="login-input-container">
              <Lock className="login-input-icon" aria-hidden="true" />
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <>
                <Loader className="login-loading-icon" aria-hidden="true" />
                Loading...
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
                Login
              </>
            )}
          </button>
        </form>

        <p className="login-link">
          Not a member?{" "}
          <Link to="/signup">
            Sign up now <ArrowRight className="inline h-4 w-4" />
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;

