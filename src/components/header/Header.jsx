import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import Ahsan from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello this is</h5>
        <h1>Ahsan Ashraf</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CallToAction />
        <HeaderSocials />

        <div className="Ahsan">
          <img src={Ahsan} alt="Ahsan Ashraf display img" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header
