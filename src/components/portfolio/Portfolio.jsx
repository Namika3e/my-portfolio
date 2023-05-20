import React from 'react'
import './portfolio.css'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Portfolio = () => {

  const {ref, inView, entry} = useInView({
    threshold: 0.4,
    delay: 200
  });

  return (
    <section id='portfolio' className={inView ? 'active_portfolio' : 'portfolio'} ref={ref}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src="../../react-proj.jpeg" alt="" />
          </div>
          <h3>Countries_app</h3>
          <p className='app_description'>A web app that shows information about every country in the world. There is a search
             feature to look up any country of your choice in seconds, 
            or filter the countries based on their regions. It also implements a light and dark mode feature.</p>
         <div className="portfolio_item-cta">
         <a href="https://github.com/namika3e" className='btn' target="_blank">Github</a>
         <a href="https://countriesapp-gold.vercel.app/" className='btn btn_primary' target='_blank'>Live Demo</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio