import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
          <nav>
            <div className="nav_logo">
              <a href="#">
                <img src="/src/assets/logo.jpg" alt="Coffee Logo" />
                <h2>Coffee</h2>
              </a>
            </div>

            <input type="checkbox" id="click" />
            <label htmlFor="click">
              <i className="menu_btn bx bx-menu"></i>
              <i className="close_btn bx bx-x"></i>
            </label>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/services">Services</Link>
              </li>
              <li>
              <Link to="/gallery">Gallery</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
    </>
  )
}

export default Header
