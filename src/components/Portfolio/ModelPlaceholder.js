import './index.scss'
import { useSpring, animated, config } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";

import * as THREE from 'three'
import { PlaneGeometry } from 'three';


/**
 * planeFloor: rotate -90 degrees. Code 
 * I wrote to help someone on Discord. 
 * Keep for any future implementations.
 */
// const planeGeometryFloor = new THREE.Mesh(
//   new THREE.PlaneGeometry(2, 2, 2), 
//   new THREE.MeshBasicMaterial({color: '#000'})
//   )

// const initialFloorRotation = {
//   x: planeGeometryFloor.rotation.x,
//   y: planeGeometryFloor.rotation.y,
//   z: planeGeometryFloor.rotation.z,
//   getRotation(){
//     console.table(
//     'floor_rotationX:', this.x,
//     'floor_rotationY:', this.y,
//     'floor_rotationZ:', this.z
//     )
//   }
// }
// const rotateCounter90 = -90
// planeGeometryFloor.rotation.x = 
//   THREE.MathUtils.degToRad(initialFloorRotation.x + rotateCounter90);
function ModelPlaceholder() {

    const myMesh = React.useRef();
    const [active, setActive] = useState(false);

    const { scale } = useSpring({
       scale: active ? 1.5 : 1,
       config: config.wobbly
    });

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.x = a;
      });

  return (
    <>
      <animated.mesh
      position-y={0.5}
      scale={scale}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="red" />
    </animated.mesh>
    </>
    
  )
}
export default ModelPlaceholder

