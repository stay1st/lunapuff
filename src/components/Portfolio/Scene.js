import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, PerformanceMonitor, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { useControls } from 'leva'
import Projects from '../Projects'
import { Perf } from 'r3f-perf'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'

function Scene() {
  /**
   * Loaders
   */
  const gltf = useLoader(GLTFLoader, '/models/cyberpunk_desk/scene.gltf')
  const env = useLoader(
    GLTFLoader,
    '/models/modern_office_reception_baking/scene.gltf'
  )

  /**
   * GUI / Debugging / Performance Monitoring
   */
  const debuggingControls = useControls({
    position: -2,
    dpr: 1.5,
  })

  // Settings for resolution on renderer
  const [dpr, setDpr] = useState(1.5)

  /**
   * Dragging 
   */
  const introToStart = 'Click/Drag';

function handleClickOnIntro() {
  const text = document.getElementById('intro-text-div')
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

  return (
    <>
      <Perf />
      {/* Boxed Scene Model */}
      <primitive object={env.scene} position={[23, -10, 0]} scale={6}>
      <Html 
        position={[-4.1, 1.75, 0.02]}
      >
        <div id='intro-text-div' onClick={handleClickOnIntro}>
          <h2 id='intro-to-click'>{`${introToStart}`}</h2>
        </div>
      </Html>
        <Suspense>
          <PerformanceMonitor
            onIncline={() => setDpr(2)}
            onDecline={() => setDpr(1)}
            onChange={console.log('DPR Changed in Scene:', dpr)}
          >
            {/* Projects to display on Portfolio */}
            <Projects frameLoop="demand" />
          </PerformanceMonitor>
        </Suspense>
      </primitive>
    </>
  )
}
export default Scene
