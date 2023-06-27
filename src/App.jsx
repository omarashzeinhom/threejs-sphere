import * as THREE from 'three';

import './App.css'

function App() {
  /* Setup Scene Start  */
  // 1. SETTING UP A SCENE 
  // geometry , material , and mesh.
  const scene = new THREE.Scene();

  // TORUS KNOT
  /* Constructor Parameters
  FROM // https://threejs.org/docs/#api/en/geometries/TorusKnotGeometry

  TorusKnotGeometry(
      
      tube : Float, 
      tubularSegments : Integer, 
      radialSegments : Integer, 
      p : Integer, 
      q : Integer
    )

  */
  const geometry = new THREE.TorusKnotGeometry( 7, 3, 270, 20, 20 ,20 ); 
  // Color
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
  // Mesh 
  const torusKnot = new THREE.Mesh( geometry, material ); scene.add( torusKnot );

  scene.add(torusKnot);

  //2. Setting up a Camera
  /* Parameters
  PerspectiveCamera(
    fov: //field of view in radians
    aspect: //aspect ratio
    )
  */
  
    const camera = new THREE.PerspectiveCamera(45, 800, 600);
  scene.add(camera);
  
  /* Setup Scene End  */




  /* Render  Scene Start   */
  // Renderer 

  const canvas = document.querySelector('.webgl');
  const renderer = new THREE.WebGLRenderer({canvas});
  
  // DEFINE Canvas Size
  renderer.setSize(800, 600);
  renderer.render(scene,camera);



  /* Render  Scene  End  */

  return (
    <>
  <h1>3D Sphere</h1>
    </>
  )
}

export default App
