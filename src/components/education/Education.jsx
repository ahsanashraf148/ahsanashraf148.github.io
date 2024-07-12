import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fast from '../../assets/fast.png';
import adamjee from '../../assets/adamjee.png';
import google from '../../assets/google.png';
import meta from '../../assets/meta.png';
import ibm from '../../assets/ibm.png';
import deep from '../../assets/deeplearning.png';
import ucs from '../../assets/ucs.png';
import './education.css';

const Education = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <section id='education'>
      <h5>Where and where have I studied</h5>
      <h2>Education</h2>

      <div className='container education__container'>
        <Slider {...settings}>
          <div className="education__1 education-logo-container">
            <div className="logo-and-name">
              <img src={fast} alt="fast nuces karachi" />
              <h3><a href="https://www.nu.edu.pk/">FAST-NUCES, Karachi</a></h3>
            </div>
            <h4>Bachelor of Science in Computer Science</h4>
          </div>
          <div className="education__1 education-logo-container">
            <div className="logo-and-name">
              <img src={adamjee} alt="adamjee government science college karachi" />
              <h3><a href="https://pk.linkedin.com/company/adamjee-govt-science-college-karachi">Adamjee Government Science, College</a></h3>
            </div>
            <h4>Pre-Engineering</h4>
          </div>
          <div className="education__1 certification">
            <h3>Certifications</h3>
            <div className="education__content">
              <ul>
                <li><div className="logo-name-container"><img src={ibm} alt="ibm logo" /><a href="https://www.coursera.org/account/accomplishments/professional-cert/XYP3YMGHNSCH">Data Science Professional Certificate: IBM</a></div></li>
                <li><div className="logo-name-container"><img src={google} alt="google logo" /><a href="https://www.coursera.org/account/accomplishments/verify/6RFJEFEVNA37">Crash Course On Python: Google</a></div></li>
                <li><div className="logo-name-container"><img src={meta} alt="meta logo" /><a href="https://www.coursera.org/account/accomplishments/verify/B3YJ7WQKTSAD">Django Web Framework: Meta</a></div></li>
                <li><div className="logo-name-container"><img src={ibm} alt="ibm logo" /><a href="https://www.coursera.org/account/accomplishments/verify/HUW7YE2GW762">Introduction to Computer Vision and Image Processing: IBM</a></div></li>
                <li><div className="logo-name-container"><img src={deep} alt="deeplearning.ai logo" /><a href="https://www.coursera.org/account/accomplishments/verify/H8WJHP4QKW7D">Neural Networks and Deep Learning: DeepLearning.AI</a></div></li>
                <li><div className="logo-name-container"><img src={ucs} alt="UCSC logo" /><a href="https://www.coursera.org/account/accomplishments/specialization/8FEHXBFS49X2">C and C++ Specialization: University of California, Santa Cruz</a></div></li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Education;
