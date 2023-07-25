import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './header.css'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/charles-amobeda-096887231" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Namika3e" target='_blank' rel="noreferrer"><FaGithub /></a>
        
    </div>
  )
}

export default HeaderSocials