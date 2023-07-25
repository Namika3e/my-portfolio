import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
// import { useInView } from 'react-intersection-observer'

const Services = () => {

  // const {ref, inView} = useInView({
  //   threshold: 0,
  //   delay: 200
  // });
  
  
return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Build pitch perfect HTML and CSS model of Figma/Adobe Designs</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Build Responsive Web Apps for all screens following HTML semantics</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Consuming APIs</p>
              </li>   

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Experience working with Node.js and its framework, Express.js</p>
            </li> 

           <li>
              <BiCheck className='service_list-icon'/>
              <p>Creating RESTful APIs</p>
            </li> 

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Authentication with JWT</p>
            </li>  

            <li>
              <BiCheck className='service_list-icon'/>
              <p>GIT and Github</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Experience using React and its hooks</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Ability to adapt to new technologies and tools quickly and learn continuously</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p> Strong problem-solving skills to analyze and troubleshoot technical issues</p>
            </li>              
            </ul>

           
            
        </article>
      </div>
    </section>
  )
}

export default Services