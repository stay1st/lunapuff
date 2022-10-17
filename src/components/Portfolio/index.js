import './index.scss'
import React, { useState, useEffect, Suspense } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import AnimationThreeJS from '../AnimationThreeJS'
import projects from '../../portfolio/portfolio.json'
import cover from '../../assets/images/quote-generator.png'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2700)
    return () => {
      clearTimeout()
    }
  }, [])

  const renderPortfolio = (projects) => {
    return (
      <div className="projects-container">
        {projects.map((port, idx) => {
          return (
            <div
              key={'project-' + idx.toString()}
              className="project-covers-container"
            >
              <img
                className="projects-img"
                src={cover}
                alt="Quote-Generator-Mobile-UI"
              />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={15}
        />
      </h1>
      <Suspense>
        <AnimationThreeJS 
            portImages={renderPortfolio(projects.portfolio)}
            className='threejs-canvas' />
      </Suspense>
    </div>
  )
}

export default Portfolio
