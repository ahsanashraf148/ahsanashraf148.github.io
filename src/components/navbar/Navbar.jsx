import React from 'react'
import { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { PiCreditCard } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import './navbar.css'



const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNavbar('#')} className={activeNavbar === '#' ? 'active' : ''}><CiHome /></a>
      <a href="#about" onClick={() => setActiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''}><FaRegAddressCard /></a>
      <a href="#education" onClick={() => setActiveNavbar('#education')} className={activeNavbar === '#education' ? 'active' : ''}><IoSchoolOutline /></a>
      <a href="#experience" onClick={() => setActiveNavbar('#experience')} className={activeNavbar === '#experience' ? 'active' : ''}><MdOutlineWorkOutline /></a>
      <a href="#skills" onClick={() => setActiveNavbar('#skills')} className={activeNavbar === '#skills' ? 'active' : ''}><RiPoliceBadgeLine /></a>
      <a href="#portfolio" onClick={() => setActiveNavbar('#portfolio')} className={activeNavbar === '#portfolio' ? 'active' : ''}><PiCreditCard /></a>
      <a href="#contact" onClick={() => setActiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active' : ''}><CiPhone /></a>
      </nav>
  )
}

export default Navbar
