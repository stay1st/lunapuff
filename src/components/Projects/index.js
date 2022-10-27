import './index.scss'
import { Html, Text } from '@react-three/drei'

const Projects = () => {

    return (
        <>
            {/* Drum Machine Project */}
          <Html
            transform
            rotation-y={179}
            position={[1, 1.5, 5]}
            wrapperClass="htmlDrumMachine"
            distanceFactor={1.17}
          >
            <iframe src="https://stay1st.github.io/drum-machine/" />
          </Html>
          <Text
            rotation-y={179}
            font="/fonts/helvetica-neu.ttf"
            fontSize={0.3}
            position={[1, 2.8, 5]}
          >
            Drum Machine
          </Text>
          {/* Javascript Calculator Project */}
          <Html
            transform
            rotation-y={179}
            position={[-3, 1.5, 5]}
            wrapperClass="htmlJavascriptCalculator"
            distanceFactor={1.25}
          >
            <iframe src="https://stay1st.github.io/javascript-calculator/" />
          </Html>
          <Text
            rotation-y={179}
            font="/fonts/helvetica-neu.ttf"
            fontSize={0.3}
            position={[-3, 2.8, 5]}
          >
            Javascript Calculator
          </Text>
          {/* Markdown Previewer Project */}
          <Html
            transform
            rotation-y={179}
            position={[-7, 1.5, 5]}
            wrapperClass="htmlMarkdownPreviewer"
            distanceFactor={1.25}
          >
            <iframe src="https://stay1st.github.io/markdown-previewer/" />
          </Html>
          <Text
            rotation-y={179}
            font="/fonts/helvetica-neu.ttf"
            fontSize={0.3}
            position={[-7, 2.8, 5]}
          >
            Markdown Previewer
          </Text>
        </>
    )
}
export default Projects