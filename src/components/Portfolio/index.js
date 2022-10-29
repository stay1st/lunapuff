import './index.scss'
import { useState, useEffect, Suspense } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { OrbitControls, PerformanceMonitor, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ModelPlaceholder from './ModelPlaceholder'
import Scene from './Scene'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 2700)
  }, [])

  const [dpr, setDpr] = useState(1.5)

  return (
    <div className="container portfolio-page">
      <h1 id="h1-heading">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={20}
        />
      </h1>
      <h2 id="scroll-to-bottom"><a href="javascript: document.body.scrollIntoView(false);">
        {'Skip to projects '}
        </a>
        <FontAwesomeIcon icon={faArrowAltCircleDown} />
      </h2>
      <div id='about-portfolio-text'>
        <p>
          Below these blocks of text is an interactive 3D Canvas mounting to the Document Object Model. My portfolio
          projects are displayed within the application.

          </p>
          <h4 id='user-exp-message'>
          For the best user experience: Please, make sure you've opened this web page in a Chromium Browser, e.g. Google Chrome, Microsoft Edge, or Opera.
          </h4>
          <p>
          <strong>Why I chose this method</strong>
          </p>
          <p>It's no secret that there is going to be a substantial increase in demand for animated web pages and applications. As consumer spending decreases, the 
          need for innovation increases. So, I thought... "Wouldn't it be amazing to display my projects within a project? Also, wouldn't it be great if they were fully functional? Lastly, how could
          I create the best immersive experience?"</p>
          <p>
          <strong>How I created it</strong>
          </p>
          <p>
          Engineered 4 functional components that render a loaded .gltf model "baking in shadows and lighting for Performance", Engineered 3 functional components, Suspended three iframes and the model, created a spinning geometrical shape fallback spinner,  
          set element attributes on initial render for camera/meshes/models/OrbitalControls.
          </p>
          <p>
            <strong>What I used</strong>
          </p>
          <p>
          NodeJS, ReactJS, ReactThree-Fiber, ReactThree-Drei, ThreeJS, GLTF Models/Textures/Materials, Leva, R3F, SASS.
        </p>
        <p>
          <strong>Controls:</strong>
        </p>
        <ul>
        <p style={{color: "#0090d4"}}><strong>Desktop</strong></p>
          <li>Left-Click: Activates action</li>
          <li>{'Left-Click (Hold) + "Move the mouse": Looks around the office'}</li>
          <li>{'Right-Click (Hold) + "Move the mouse"'}</li>
          <li>Scroll: Zoom-In and Zoom-Out</li>
          <p style={{color: "#0090d4"}}><strong>Mobile</strong></p>
        <p>Please use your mobile device's equivalent actions/gestures.</p>
        </ul>
        <div id='gh-links-div'>
          <strong>{'Project Links to GitHub: '}</strong>
           <a id='project-links' href='https://github.com/stay1st/lunapuff'>{'Lunapuff-Portfolio'}</a>
          , <a id='project-links' href='https://github.com/stay1st/drum-machine'>{'Drum-Machine'}</a>
          , <a id='project-links' href='https://github.com/stay1st/javascript-calculator'>{'Javascript-Calculator'}</a>
          , <a id='project-links' href='https://github.com/stay1st/markdown-previewer'>{'Markdown-Previewer'}</a>
        </div>
      </div>
      <div className="canvas-container">
        <Canvas
          dpr={dpr}
          frameLoop="demand"
          position-x={-40}
          camera={{
            fov: 70,
            position: [-4, 1, -4],
          }}
        >
          <ambientLight intensity={0.1} />
          <directionalLight color="#0090d4" position={[0, 0, 5]} />
          <Suspense fallback={<ModelPlaceholder />}>
          {/* PerformaceMonitor: 3D Modern Office Scene with 3 iframes */}
            <PerformanceMonitor
              onIncline={() => setDpr(2)}
              onDecline={() => setDpr(1)} 
              onChange={console.log('DPR Changed in Portfolio:', dpr)}
            >
            {/* Scene: 3D Modern Office Scene with 3 iframes */}
              <Scene />
              <OrbitControls />
            </PerformanceMonitor>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
export default Portfolio
