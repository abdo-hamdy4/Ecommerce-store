
import './signupPage.css'

import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
const SignUpPage = () => {
    const loading=false;
    const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
      };
  return (
    <div className="signup-page-container">
    <motion.div
      className="motion-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="heading">Create your account</h2>
    </motion.div>

    <motion.div
      className="form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="label">
              Full name
            </label>
            <div className="input-container">
              <User className="input-icon" />
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input"
                placeholder="John Doe"
              />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <div className="input-container">
              <Mail className="input-icon" />
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="input"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="input"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="button"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="mr-2 h-5 w-5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-5 w-5" />
                Sign up
              </>
            )}
          </button>

        </form>
        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login here <ArrowRight className="inline h-4 w-4" />
          </Link>
        </p>
        </motion.div>
        </div>
  )
}
export default SignUpPage;


