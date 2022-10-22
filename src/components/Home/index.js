import './index.scss'
import React, { useState, useEffect, Suspense, useCallback } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-j.png'
import AnimatedLetters from '../AnimatedLetters'
import lunaIntro from '../../assets/audio/luna-intro.mp3'
import lunaNextStep from '../../assets/audio/luna-intro-to-click.mp3'
import PlayButton from './PlayButton'
const AnimatedBg = React.lazy(() => import('../AnimatedBg'))

const Home = (props) => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portId, setPortId] = useState('')
  const [toggle, setToggle] = useState(null)
  const welcomeArray = ['H', 'e', 'l', 'l', 'o', ',']
  const nameArray = ['o', 's', 'h', ',']
  const jobArray = [
    'l',
    'e',
    't',
    "'",
    's',
    ' ',
    'c',
    'r',
    'e',
    'a',
    't',
    'e',
    '!',
  ]

  const description = `Front-End Developer, JavaScript Coder, Life-long Learner 🌕🌗🌘🌑`

  const playIntro = useCallback((audio) => {
    let luna1 = document.getElementById(audio)
    luna1.currentTime = 0
    const lunaPromise = luna1.play()
    if (lunaPromise !== undefined) {
      lunaPromise
        .then((_) => {
          setTimeout(() => {
            playIntro('luna-next-step')
            console.log('%caudio played auto', 'color: green;')
          }, 10000)
        })
        .catch(function (error) {
          console.log(error)
          setToggle(false)
        })
    }
  }, [])

  useEffect(() => {
    setTimeout(setLetterClass('text-animate-hover', 4000))
  new Promise(() => {
    setTimeout(playIntro('luna-intro'), 2000);
  }).then(() => {
    return clearTimeout()
  }, setPortId('port-id'))
  clearTimeout()
  }, [playIntro])

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
            <AnimatedLetters
              letterClass={letterClass}
              strArray={welcomeArray}
              idx={14}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['i', 't', "'", 's']}
              idx={15}
            />
            <img className="bounce" src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <div className="home-description-div">
            <h2 id="description">{description}</h2>
          </div>
          <div className="btn-container">
            <Link to="/portfolio" className="btn" id={portId}>
              <svg>
                <rect
                  x="0"
                  y="0"
                  fill="none"
                  width="100%"
                  height="100%"
                  id={portId}
                />
              </svg>
              Portfolio
            </Link>
            <Link to="/resume" className="btn">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Resumé
            </Link>
            <PlayButton toggle={toggle} />
            <audio id="luna-intro" src={lunaIntro}></audio>
            <audio id="luna-next-step" src={lunaNextStep}></audio>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
