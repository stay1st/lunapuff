import './index.scss'
import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-j.png';
import AnimatedLetters from '../AnimatedLetters';
const AnimatedBg = React.lazy(() => import('../AnimatedBg'));

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['o', 's', 'h', 'u', 'a', ',']
  const jobArray = [
    'A',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
    '\n',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div>
      <canvas id="canvas-main">
        <Suspense>
          <AnimatedBg />
        </Suspense>
      </canvas>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img className="bounce" src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2>Front-End Developer / JavaScript Coder / Life-long learner</h2>
          <div className="btn-container">
            <Link to="/portfolio" className="btn">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Portfolio
            </Link>
            <Link to="/resume" className="btn">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Resumé
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
