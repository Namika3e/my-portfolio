import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
// import { FaWindowMaximize } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';


const Experience = () => {

  return(
    <section id='experience'>
    <h5>What Skills I Have</h5>
        <h2>My Experience</h2>


    <section className='container experience_container' >
      <article>
        <h3>Applistructure Consulting Limited, <span className=''>Lagos Nigeria</span> <br /> <em>Fullstack Software Developer(Fulltime)</em></h3>
        <p className='color'>February 2024 - PRESENT</p>
      {/* <p>Stack: NextJS, TypeScript, Redux Toolkit, MySQL, ExpressJS</p> */}
      </article>

      <article>
        <h3>Growwr <span className=''>, Lagos Nigeria</span> <br /> <em>Frontend Developer(Contract)</em></h3>
        <p className='color'>April 2024 - May2024</p>
      {/* <p>Stack: ReactJS TypeScript, React Router, SCSS, Bootstrap</p> */}
      </article>

      <article>
        <h3>United States Of Africa (Zumaridi Communications), <span className=''>5900 BALCONES DRIVE STE 100 AUSTIN TX 78731, U.S.A.</span> <br /> <em>Frontend Developer(Part-time)</em></h3>
        <p className='color'>April 2024 - May 2024</p>
      {/* <p>Stack: ReactJS TypeScript, React Router, SCSS, Bootstrap</p> */}
      </article>

      <article>
        <h3>YouVerify Inc, <span className=''>Lagos Nigeria</span> <br /> <em>Software Engineer Intern</em></h3>
        <p className='color'>December 2021 - May 2022</p>
      {/* <p>Stack: ReactJS JavaScript, React Router, TailwindCSS</p> */}
      </article>



    </section>
    </section>
  )
//   const {ref, inView} = useInView({
//     threshold: 0.4,
//     delay: 200
//   });

// return (
//     <section id='experience' ref={ref} className={inView ? 'show_experience_section' : ''}>
//       <h5>What Skills I Have</h5>
//       <h2>My Experience</h2>
//       <div className="container experience_container">
//       <div className={inView ? 'active_experience_frontend' : 'experience_frontend'}>
//         <h3>Frontend Development</h3>
//         <div className="experience_content">
//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//             <div>
//             <h4>HTML</h4>
//             <small className='text-light'>Experienced</small>
//             </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//             <div>
//               <h4>CSS3</h4>
//             <small className='text-light'>Experienced</small>
//             </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//            <div>
//            <h4>JavaScript</h4>
//             <small className='text-light'>Experienced</small>
//            </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//             <div>
//             <h4>TypeScript</h4>
//             <small className='text-light'>Experienced</small>
//             </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//             <div>
//             <h4>TailwindCSS</h4>
//             <small className='text-light'>Experienced</small>
//             </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//            <div>
//            <h4>ReactJS</h4>
//             <small className='text-light'>Experienced</small>
//            </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//            <div>
//            <h4>Redux</h4>
//             <small className='text-light'>Experienced</small>
//            </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//            <div>
//            <h4>Redux Toolkit</h4>
//             <small className='text-light'>Experienced</small>
//            </div>
//           </article>

//           {/* <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//             <div>
//             <h4>NextJS</h4>
//             <small className='text-light'>Experienced</small>
//             </div>
//           </article> */}
//         </div>
//       </div>
// {/* ========================== END OF FRONTEND ===================== */}

//       <div className={inView ? 'active_experience_backend' : 'experience_backend'}>
//       <h3>Backend Development</h3>
//         <div className="experience_content">
//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//            <div>
//            <h4>Express JS</h4>
//             <small className='text-light'>Experienced</small>
//            </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//           <div>
//           <h4>MongoDB</h4>
//             <small className='text-light'>Experienced</small>
//           </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//           <div>
//           <h4>Node JS</h4>
//             <small className='text-light'>Experienced</small>
//           </div>
//           </article>

//           <article className="experience_details">
//             <BsPatchCheckFill className='experience_details-icon'/>
//           <div>
//           <h4>REST API</h4>
//             <small className='text-light'>Experienced</small>
//           </div>
//           </article>
//           </div>
        
//       </div>
//       </div>

//     </section>
//   )
}



export default Experience