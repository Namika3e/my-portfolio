import React from 'react'
import './about.css'
import { useInView } from 'react-intersection-observer'


const About = () => {

  const {ref, inView, entry} = useInView({
    threshold: 0.1,
    delay:200
  });
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
            I'm a Software Engineer with experience developing web applications using MongoDB,
Express.js, React.js, and Node.js. Proficient in using MongoDB to store, retrieve, and
manipulate data, and experienced in building web applications on top of Node.js
using Express.js. Demonstrated ability to develop complex user interfaces using
React.js and knowledge of its ecosystem, including ContextAPI and React Router.
Passionate about creating robust and scalable web applications using the latest
MERN stack technologies.
            </p>

            <a href="#contact" className='btn btn_primary'>Let's Talk</a>
            
          </div>
      </div>
    </section>
  )
}

export default About

// const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;