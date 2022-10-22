import './index.scss'
import { ReactDOM } from 'react'
import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import cover from '../../assets/images/quote-generator.png'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { ReactThreeFiber, ambientLight, orbitalControls } from '@react-three/fiber'

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2700)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  // const renderPortfolio = (projects) => {
  //   return (
  //     <div className="projects-container">
  //       {projects.map((port, idx) => {
  //         return (
  //           <div
  //             key={'project-' + idx.toString()}
  //             className="project-covers-container"
  //           >
  //             <img
  //               className="projects-img"
  //               src={cover}
  //               alt="Quote-Generator-Mobile-UI"
  //             />
  //           </div>
  //         )
  //       })}
  //     </div>
  //   )
  // }

  return (
    <div className="container portfolio-page">
      <h1 id="page-title">
        <AnimatedLetters 
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={20}
        />
      </h1>
      <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />
      <mesh>
        <boxGeometry 
        rotate={[1, 0, 0]} args={[2, 2, 2]} />
        <meshStandardMaterial />
        <axesHelper />
      </mesh>
      </Canvas>
    </div>
  )
}
