import React from 'react'
import './footer.css'
// import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer >
      <a href="#" className="footer_logo">CHARLES</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        {/* <a href=""> <FiInstagram /> </a> */}
        <a href="https://twitter.com/namikazedotdev?s=21"> <IoLogoTwitter /> </a>
      </div>

      {/* <div className="footer_copyright">
        <small>&copy; </small>
      </div> */}
    </footer>
  )
}

export default Footer