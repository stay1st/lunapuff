import './index.scss'
import { useState, useEffect, Suspense } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ModelPlaceholder from './ModelPlaceholder'
import Scene from './Scene'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Portfolio = () => {
  // const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   setTimeout(() => {
  //     useGLTF.preload()
  //     return setLetterClass('text-animate-hover')
  //   }, 2700)
  // }, [])

  return (
    <div className="container portfolio-page">
      {/* <h1 id="h1-heading">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={20}
        />
      </h1> */}
      <div className="canvas-container">
        <Canvas 
          frameLoop='demand' 
          position-x={-40} 
          camera={
          {
           rotateY: {angle: 30},
           fov: 70
          }}>
          <pointLight intensity={0.2} position={[-10, 25, 5]} color="#0090d4" />
          <ambientLight intensity={0.1} />
          <directionalLight color="#0090d4" position={[0, 0, 5]} />
          <Suspense fallback={<ModelPlaceholder />}>
            <Scene />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
export default Portfolio
