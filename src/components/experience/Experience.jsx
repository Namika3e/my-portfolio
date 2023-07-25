import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { FaWindowMaximize } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';


const Experience = () => {
  const {ref, inView, entry} = useInView({
    threshold: 0.4,
    delay: 200
  });

return (
    <section id='experience' ref={ref} className={inView ? 'show_experience_section' : ''}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
      <div className={inView ? 'active_experience_frontend' : 'experience_frontend'}>
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>CSS3</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
           <div>
           <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>TailwindCSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
           <div>
           <h4>ReactJS</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          {/* <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>NextJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article> */}
        </div>
      </div>
{/* ========================== END OF FRONTEND ===================== */}

      <div className={inView ? 'active_experience_backend' : 'experience_backend'}>
      <h3>Backend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
           <div>
           <h4>Express JS</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>REST API</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          </div>
        
      </div>
      </div>

    </section>
  )
}



export default Experience