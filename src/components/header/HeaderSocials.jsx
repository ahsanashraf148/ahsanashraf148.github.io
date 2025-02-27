import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ahsanashraf148/" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/ahsanashraf148" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://leetcode.com/u/ahsanashraf148/" target='_blank' rel="noopener noreferrer"><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials
