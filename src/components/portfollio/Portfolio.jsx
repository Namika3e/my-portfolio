import React from 'react'
import './portfolio.css'
// import { useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'

const Portfolio = () => {

  // const {ref, inView} = useInView({
  //   threshold: 0,
  //   delay: 200
  // });

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src="../../pig-game.jpg" alt="pig_app" />
          </div>
          <h3>Pig-game</h3>
          <p className='app_description'>Players take turns to roll a single dice as many times as they wish, 
          adding all roll results to a running total, but losing their gained score for the turn if they roll 
          a 1. Made Using HTML, CSS and Vanilla JavaScript</p>
         <div className="portfolio_item-cta">
         <a href="https://github.com/namika3e/pig-game" className='btn' target="_blank" rel="noreferrer">Github</a>
         <a href="https://pig-game-git-main-namika3e.vercel.app/" className='btn btn_primary' target='_blank'  rel="noreferrer">Live Demo</a>
         </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src="../../react-proj.jpeg" alt="" />
          </div>
          <h3>Countries_app</h3>
          <p className='app_description'>A web app that shows information about every country in the world. There is a search
             feature to look up any country of your choice in seconds, 
            or filter the countries based on their regions. It also implements a light and dark mode feature.</p>
         <div className="portfolio_item-cta">
         <a href="https://github.com/Namika3e/countries_app" className='btn' target="_blank" rel="noreferrer">Github</a>
         <a href="https://countriesapp-gold.vercel.app/" className='btn btn_primary' target='_blank' rel="noreferrer">Live Demo</a>
         </div>
        </article>

       
      </div>
    </section>
  )
}

export default Portfolio