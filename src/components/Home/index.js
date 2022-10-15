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
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portId, setPortId] = useState('')
  const [toggle, setToggle] = useState(null)
  const welcomeArray = ['h', 'e', 'l', 'l', 'l', 'o',',']
  const nameArray = ['o', 's', 'h', 'u', 'a', ',']
  const jobArray = [
    'l',
    'e',
    't',
    "'",
    's',
    ' ',
    's',
    'h',
    'a',
    'r',
    'e',
    '!',
    ' ',
    '🌎',
    '\n',
  ]

  const description = `</> 🌕 Front-End Developer 🌖 </> 🌗 JavaScript Coder 🌘 </>🌑 Father & Friend 🌒 </>`

  const playIntro = useCallback((audio) => {
    let luna1 = document.getElementById(audio)
    luna1.currentTime = 0
    const lunaPromise = luna1.play()
    if (lunaPromise !== undefined) {
      lunaPromise
        .then((_) => {
          console.log('%caudio played auto', 'color: green;')
        })
        .catch(function (error) {
          return setToggle(false)
        })
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      playIntro('luna-intro')
    }, 2000)
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
    setTimeout(() => {
      setPortId('port-id')
      playIntro('luna-next-step')
    }, 10000)
    return () => {
      playIntro.currentTime = 0
      return clearTimeout()
    }
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
              strArray={['i', "t", "'", 's']}
              idx={14}
            />
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
          <h2>{description}</h2>
          <div className="btn-container">
            <Link to="/portfolio" className="btn" id={portId}>
              <svg id={portId}>
                <rect x="0" y="0" fill="none" width="100%" height="100%" id={portId}/>
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
