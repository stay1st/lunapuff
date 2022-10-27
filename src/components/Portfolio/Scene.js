import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { useControls } from 'leva'
import Projects from '../Projects'
import { Perf } from 'r3f-perf'



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
   * Gui for Debugging
   */
  const debuggingControls = useControls({
    position: -2,
  })

  useEffect(() => {
    
  },[])

  return (
    <>
      <Perf />
      {/* Boxed Scene Model */}
      <primitive object={env.scene} position={[23, -10, 0]} scale={6}>
      {/* Projects to display on Portfolio */}
        <Suspense>
          <Projects frameLoop='demand' />
        </Suspense>
      </primitive>
    </>
  )
}
export default Scene