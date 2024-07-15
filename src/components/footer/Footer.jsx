import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ahsan Ashraf</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ahsanashraf148/" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/ahsanashraf148" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://leetcode.com/u/ahsanashraf148/" target='_blank' rel="noopener noreferrer"><SiLeetcode /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ahsan Ashraf. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer
