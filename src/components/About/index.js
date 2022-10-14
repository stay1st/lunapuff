import './index.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 2700)
  }, [])

  return (
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't']}
              idx={15}
            />
          </h1>
          <h2>What brought me into development?</h2>
          <p></p>
          <h3>How I started in Tech</h3>
          <p></p>
          <h3>The big switch!</h3>
          <p></p>
          <h3>Where I'm at today</h3>
          <p></p>
        </div>
        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="react">
              <Link to="/portfolio" alt="portfolio">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </Link>
            </div>

            <div className="html5">
              <Link to="/portfolio" alt="portfolio">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </Link>
            </div>
            <div className="css3">
              <Link to="/portfolio" alt="portfolio">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </Link>
            </div>
            <div className="github">
              <a href="https://www.github.com/stay1st/" alt="github@stay1st">
                <FontAwesomeIcon icon={faSquareGithub} color="#FFF" />
              </a>
            </div>
            <div className="javaScript" alt="portfolio">
              <Link to="/portfolio">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </Link>
            </div>
            <div className="git">
              <a href="https://www.github.com/stay1st/" alt="github@stay1st">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
