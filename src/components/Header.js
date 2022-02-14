
import React from 'react'
import logo from "../assets/Kfc_logo.png"
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
    <div>
      <div className="top-header-wrapper">
        <Link to='/'><img src={logo} alt="" /></Link>
        <ul>
          <li><Link to='/Location'><i class="bi bi-geo-alt-fill"></i> Store locator</Link></li>
          <li><Link to='/Login'><i class="bi bi-person-fill"></i> Sign in/Register</Link></li>
        </ul>
      </div>
    </div>
    <Navbar/>
    </>
  )
}

export default Header
