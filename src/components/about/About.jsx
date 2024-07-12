import React from 'react'
import { LiaAwardSolid } from "react-icons/lia";
import AboutAhsan from '../../assets/ahsan5.jpg'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__Ahsan">
          <img src={AboutAhsan} alt="Ahsan Ashraf front image" className='about__Ahsan-image'/>
        </div>
        <div className="about__content">
        <p>Hello!<br />I am Ahsan Ashraf, pursuing my undergraduate studies from the National University of Computer and Emerging Science (FAST-NUCES) in the field of Computer Science. I am an inquisitive and enthusiastic developer with leadership skills and a strong foundation in mathematics, logic, problem-solving, and coding. In addition to it, I am learning and practicing computer science streams like Web Development, Data Science, Machine Learning, and Deep Learning, and that's what I am passionate about.</p>
          <div className="about__cards">
            {/* <article className="about__card">
            </article> */}
      
            {/* <article className="about__card">
              <LiaAwardSolid className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years of experience</small>
            </article> */}
            
            {/* <article className="about__card">
              <LiaAwardSolid className='about__icon'/>
              <h5></h5>
              <small>1+ years of experience</small>
            </article> */}
          </div>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
