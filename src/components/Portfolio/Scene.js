import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { Html, Text } from '@react-three/drei'
import { Suspense } from 'react'

function Scene() {
  const gltf = useLoader(GLTFLoader, '/models/cyberpunk_desk/scene.gltf')
  const env = useLoader(
    GLTFLoader,
    '/models/modern_office_reception_baking/scene.gltf'
  )


  return (
    <>
    {/* Desktop 2 x Monitor Computer Model */}
    <primitive 
    animated
      object={gltf.scene} 
      position={[35, -11, -1.8]} 
      scale={2.5} 
      />
      {/* Boxed Scene Model */}
    <primitive 
      object={env.scene} 
      position={[23, -10, 0]} 
      scale={6} 
      >
      <Suspense>
      {/* Drum Machine Project */}
      
      <Html 
        transform
        rotation-y={179}
        position={[1, 1.5, 5]}
        wrapperClass='htmlDrumMachine'
        distanceFactor={ 1.17 }
      >
      <iframe src='https://stay1st.github.io/drum-machine/' />
      </Html>
      <Text 
      rotation-y={179}
      font='/fonts/helvetica-neu.ttf' 
      fontSize={ .3 }
      position={ [1, 2.8, 5] }
      >
        Drum Machine
      </Text>
      {/* Javascript Calculator Project */}
      <Html 
        transform
        rotation-y={179}
        position={[-3, 1.5, 5]}
        wrapperClass='htmlJavascriptCalculator'
        distanceFactor={ 1.25 }
      >
      <iframe src='https://stay1st.github.io/javascript-calculator/' />
      </Html>
      <Text 
      rotation-y={179}
      font='/fonts/helvetica-neu.ttf' 
      fontSize={ .3 }
      position={ [-3, 2.8, 5] }
      >
        Javascript Calculator
      </Text>
      {/* Markdown Previewer Project */}
      <Html 
        transform
        rotation-y={179}
        position={[-7, 1.5, 5]}
        wrapperClass='htmlMarkdownPreviewer'
        distanceFactor={ 1.25 }
      >
      <iframe src='https://stay1st.github.io/markdown-previewer/' />
      </Html>
      <Text 
      rotation-y={179}
      font='/fonts/helvetica-neu.ttf' 
      fontSize={ .3 }
      position={ [-7, 2.8, 5] }
      >
        Markdown Previewer
      </Text>
      </Suspense>
      </primitive>
    </>
  )
}
export default Scene
