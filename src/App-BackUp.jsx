import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./App.css";

function App() {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  /* Setup Scene Start  */

  /* 1. SETTING UP A SCENE 
  geometry , material , and mesh.
  */

  // DEFINE A SCENE
  const scene = new THREE.Scene();

  // Geometry
  const geometry = new THREE.SphereGeometry(5, 64, 65);
  // Color
  const material = new THREE.MeshBasicMaterial({ color: 0xbc1cec });
  // Mesh
  const mesh = new THREE.Mesh(geometry, material);

  // ADD MESH TO SCENE
  scene.add(mesh);

  //2. Setting up a Camera
  /* Parameters
  PerspectiveCamera(
    fov: //field of view in radians
    aspect: //aspect ratio
    )
  */
  // DEFINE CAMERA
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  // CHANGE camera position because the default position is the same as the canvas so they are top of each other
  // SET POSITION OF CAMERA
  camera.position.z = 20;
  // ADD CAMERA TO SCENE
  scene.add(camera);

  // LIGHT
  // DEFINE LIGHT
  const light = new THREE.PointLight(0xffffff, 1, 100);
  // SET POSITION OF Light
  light.position.set(0, 10, 10);
  // ADD LIGHT TO SCENE
  scene.add(light);

  /* Setup Scene End  */

  /* Render  Scene Start   */

  // Renderer
  const canvas = document.querySelector(".webgl");
  const renderer = new THREE.WebGLRenderer({ canvas });

  // DEFINE Canvas Size
  renderer.setSize(sizes.width, sizes.height);

  // Render Scene
  renderer.render(scene, camera);

  /* Render  Scene  End  */

  // RESIZE
  window.addEventListener("resize", () => {
    // UPDATE Sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // UPDATE Camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  // Loop to
  const loop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();

  // CONTROLS

  const controls = new OrbitControls(camera, canvas);
  controls;

  return <></>;
}

export default App;
