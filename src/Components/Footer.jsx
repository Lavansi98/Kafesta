import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <footer>
        <div className="section_container">
          <div className="footer_section">
            <div className="footer_logo">
              <a href="index.html">
                <img src="/src/assets/logo.jpg" alt="Coffee Logo" />
                <h2>Coffee</h2>
              </a>
            </div>

            <div className="useful_links">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/#why">Why Us</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="contact_us">
              <h3>Contact</h3>
              <ul>
                <li>
                  <i className="bx bx-current-location"></i>
                  <span>Berndorf, Germany</span>
                </li>
                <li>
                  <i className="bx bxs-phone-call"></i>{" "}
                  <span>+01 92728239</span>
                </li>
                <li>
                  <i className="bx bxs-time-five"></i>
                  <span>Mon-Sun : 10:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="follow_us">
              <h3>Follow</h3>
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-instagram-alt"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
