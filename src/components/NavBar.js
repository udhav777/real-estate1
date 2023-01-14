import React from "react";
import { Link ,useNavigate} from "react-router-dom";

import "./Navbar.css"
const NavBar = () => {
const navigate=useNavigate();
  const handleSigup=()=>{
    navigate('/signup')
  }

  const handleLogin=()=>{
    navigate('/login')
  }

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/">
            <img src="./Image/Logo.webp" />
          </Link>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/rent">Rent</Link>
            </li>
            <li>
              <Link to="/sale">Sale</Link>
            </li>
            <li>
              <Link to="/features"> Features</Link>
            </li>
          </ul>
        </div>

        <div className="logo-in">
        <button onClick={handleSigup}>
    <span>Signup</span><i></i>
</button>
<button onClick={handleLogin}>
    <span>Login</span><i></i>
</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
