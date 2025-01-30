import React from "react"
import { useState } from "react"
import "./login.css"
import { Link, Train } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Login() {
  var userName = "Raveen0078";
  var password = "00789";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    if(formData.email == userName && formData.password == password){
      navigate("/dashboard");
    }else{
      alert("incorrect user name or password");
    }

  }

  return (
    <div className="login-container">
      <div className="split-layout">
        <div className="image-side">
          <div className="overlay">
            <Train size={48} className="train-icon" />
            <h1>Welcome Back!</h1>
            <p>Continue your journey with Sri Lanka Railway</p>
          </div>
        </div>
        <div className="form-side">
          <div className="login-card">
            <div className="login-header">
              <h2>Log In</h2>
              <p>Access your railway account</p>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">User name</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your user name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <button
  type="submit"
  className="login-button">
  Sign In
</button>

            </form>
            <div className="login-footer">
              <p>
                Don't have an account? <a href="/create-account">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

