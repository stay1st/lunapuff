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
        <p>
        I'm Josh, an aspiring Software Engineer living in Pittsburgh, PA. At age 9 I traded all of my games for a laptop, after that, I was hooked! Over the course of the last 20 years, I've successfully 
        developed simple web pages and implemented technology solutions in business. The knowledge I've accrued generating multi-million dollar revenues. Systematically discovered
        vulnerabilities in client/business life cycles, implemented solutions, and capitalizing on trending data.
        </p>
        <h2>Languages / Libraries / Frameworks:</h2>
          <p>ReactJS, VanillaJS, ReactThree-Fiber, ThreeJS, NodeJS, ExpressJS, EmailJS, D3, MongoDB, MySQL, HTML/CSS, SASS, JQuery, Bootstrap, and React Frameworks</p> 
          <h2>Other Software:</h2>
          <p>Adobe XD, Adobe Illustrator, Adobe Photoshop, Blender, WordPress, WebEx, Convertkit, </p>
          <ul>
          <p>
            <li>
              <strong>Favorite Resources:</strong> <a href='https://www.freecodecamp.org/'>FreeCodeCamp.org</a>, <a href='https://www.codesmith.io/'>CSX/Javascript-Workshops/Pair-Programming/Codesmith.io</a>, 
              <a href='https://www.theodinproject.com/theOdinProject.com'>The Odin Project</a>.
            </li>
            <li>
              <strong>Documentation:</strong> MDN, W3 Schools, FontAwesome CDN, Github,
              Git CLI, Daily.dev, ThreeJS.org, Codewars, Leetcode, ThreeJS-Journey, ReactThree-Fiber, NPM, 
            </li>
            </p>
          </ul>
        {/* <h3>About me:</h3> 
        The section below has never been publicly shared, but I'm presenting it in hopes to save a life. Like others have done for mine. This is for you baby Luna.
        In a way to let you know truly who I am and where I started. My hope is that someone
        that reads this can find empowerment through this short timeline, and understand that they can overcome almost any obstacle!
        <p color='orange'>Here's the hard parts:</p>
          <ul>
            <li>Age NewBorn: Born in NY, Father almost causes me to be born blind - 2 sisters</li>
            <li>Age 2: Not speaking; Mother gets me speech lessons</li>
            <li>Age 4: Moved to Fort Myers, FL - affordability - 3 sisters 1 brothers</li>
            <li>Age 6: Don't know when If I'll walk again. Six Months/ Mother nurses me back to health! I can walk!</li>
            <li>Age 7: Mother was renting to own, house is foreclosed and we move to apt.</li>
            <li>Age 8: Father leaves - 3 sisters 2 brothers</li>
            <li>Age 9: 3 younger siblings re-homed to AR, eldest sister re-homed to TN, 2nd eldest sister and I re-homed to KS</li>
            <li>Age 10: All 6 of us children move to Tampa, FL into a group home to be closer to our mother</li>
            <li>Age 11: Group Home continues - - See mother weekend/month due to Group Home rules - There are 7 children now</li>
            <li>Age 12: Father removes second youngest brother and I from group home to avoid childsupport. Youngest brother is 6 left alone in group home for another year. Girls don't can't see boys. 3 sisters still in</li>
            <li>Age 15: Life was normal and okay from 12yr-15yr from step Mother & Family's Involvement. Made true impact!</li>
            <li>Age 15: Step Mother seperates from Father</li>
            <li>Age 16: </li>
          </ul>
          <ul>
            <li>Born: Johnson City NY</li>
          </ul>
        </p> */}
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
