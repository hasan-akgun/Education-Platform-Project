import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
  return (
    <div className="header">
      <h1>Welcome</h1>
      <Link to="/login"  className='login-link'>
        <button className="login-button">Login</button>
      </Link>
      
      <Link to="/signup" className='signup-link'>
        <button className="signup-button">Sign Up</button>
      </Link>
      
    </div>
  )
}