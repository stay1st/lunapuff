import './index.scss'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

// softShadows()

const SpinningMesh = ({ position, args, color, speed }) => {
  const meshBox = useRef(null)
  useFrame(
    () => (meshBox.current.rotation.x = meshBox.current.rotation.y += 0.01)
  )

  const [expand, setExpand] = useState(false)
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      position={position}
      ref={meshBox}
    >
      <boxGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attatch="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  )
}

function AnimationThreeJS() {
  return (
    <Canvas
      id="canvas-threejs"
      camera={{ fov: 60 }} //removed position: {[-5, -10, 0]}
    >
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

      <group>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
        >
          <planeGeometry attach="geometry" args={[100, 100]} />
          {/** This will need to cast a shadow */}
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>
      </group>

      <SpinningMesh
        position={[0, 0, 0]}
        args={[2, 4, .5]}
        color="aqua"
        speed={2}
      />
      <SpinningMesh 
        position={[0, -4, -3]} 
        args={[2, 4, .5]}
        color="blue" speed={6} />
      <SpinningMesh 
        position={[0, -7, 0]} 
        args={[2, 4, .5]}
        color="purple" 
        speed={6}
        />
      <OrbitControls />
    </Canvas>
  )
}

export default AnimationThreeJS
