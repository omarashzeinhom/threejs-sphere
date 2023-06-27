import * as THREE from 'three';

import './App.css'

function App() {
  // 1. SETTING UP A SCENE
  const scene = new THREE.Scene();

  // TORUS KNOT
  const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
  const torusKnot = new THREE.Mesh( geometry, material ); scene.add( torusKnot );

  return (
    <>
  <h1>3D Sphere</h1>
    </>
  )
}

export default App
