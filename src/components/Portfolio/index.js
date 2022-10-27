import './index.scss'
import { useState, useEffect, Suspense } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import cover from '../../assets/images/quote-generator.png'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'



const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 2700)
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
      <h1 id="h1-heading">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={20}
        />
      </h1>
      <div className='canvas-container'>
      <Canvas 
        camera={{ fov: 70}}>
        <pointLight intensity={0.2} position={[-10, 25, 5]} color="#0090d4" />
        <ambientLight intensity={0.1} />
        <directionalLight color="#0090d4" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
      </div>
    </div>
  )
}
export default Portfolio
