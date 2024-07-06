import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'



const Header = () => {

  return (
    <header id='header' className='heade'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Charles Amobeda</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          {/* <img src="../../my-picture.jpg" alt="" className='my_img'/> */}
          <img src="../../code-on-screen.jpg" alt="code-on-screen" style={{borderRadius: "10px"}}/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header