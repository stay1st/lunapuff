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
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

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
            idx={19}
          />
        </h1>
        <h2>Introduction:</h2>
        <p> Hey there, </p>
        <p>
          My name is Joshua, but you can call me Josh. Thank you for taking the
          time to visit <strong>lunapuff.com</strong>. I'm always looking to
          improve and collaborate with others! So, please don't hesitate to
          reach out.
        </p>
        <p style={{ color: '#00ffc2' }}>For the aspiring developer:</p>
        <p>
          I know that it can be very difficult to learn all that is needed on your journey. If this is you, I'm
          rooting for you and I'm a huge fan of your's! Hang in there, you can do it!
        </p>
        <p>I've compiled a list of helpful resources that helped me on this journey. My hopes is that
        they will help you also! Happy Coding! 💻</p>
        <p>
          <ul>
            <li>
              <strong>Highly reccommend:</strong> <a href='https://www.freecodecamp.org/'>FreeCodeCamp.org</a>, <a href='https://www.codesmith.io/'>CSX/Javascript-Workshops/Pair-Programming/Codesmith.io</a>, 
              People also like <a href='https://www.theodinproject.com/theOdinProject.com'>The Odin Project</a>.
            </li>
            <li>
              <strong>Other Resources:</strong> MDN, W3 Schools, FontAwesome CDN, Github,
              Git CLI, Daily.dev, ThreeJS.org, Codewars, Leetcode, ThreeJS-Journey, ReactThree-Fiber, NPM, 
            </li>
            <li>Helpful iPhone Applications:</li>
            <ul>
              <li>
                Mimo, CodeAcademyGo, SoloLearn, RegEx Lab, Github,
                TerminalCommands, VS Code Flash Cards, Scriptable, Codelet,
                Coursera, Udacity, EdX, MeetUp, PluralSight, Youtube, Udemy,
                Obsidian,{' '}
              </li>
            </ul>
          </ul>
        </p>
        <p></p>
        <span
          style={{
            color: 'grey',
            fontWeight: '400',
            height: '100%',
          }}
        >
          Inspired by Luna Crawford.
        </span>
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
          <div className="nodejs">
            <Link to="/portfolio" alt="nodejs">
              <FontAwesomeIcon icon={faNode} color="#FFF" />
            </Link>
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
