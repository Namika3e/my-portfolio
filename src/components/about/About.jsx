import React from 'react'
import './about.css'
// import { useInView } from 'react-intersection-observer'


const About = () => {

  // const {ref, inView, entry} = useInView({
  //   threshold: 0.1,
  //   delay:200
  // });
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      
      <div className="container about_container">
        <div className='about_me'>
          <div className='about_me-image'>
            <img src="../../me.jpeg" alt="" className='about_me-main_img' />
          </div>
        </div>

        <div className="about_content">
          <p>
          I'm a Fullstack Developer with experience developing web applications using NextJS, and ReactJS, ExpressJS, MongoDB and MySQL database. Currently working with C#. I am a great team player and i thrive under pressure. I love learning, playing videogames and just chilling.


            </p>

            <a href="#contact" className='btn btn_primary'>Let's Talk</a>
            
          </div>
      </div>
    </section>
  )
}

export default About

// const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;