import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./App.css";

function App() {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const scene = new THREE.Scene();

  // Geometry
  const geometry = new THREE.SphereGeometry(5, 64, 65);
  // Color
  const material = new THREE.MeshBasicMaterial({ color: 0xbc1cec });
  // Mesh
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  //2. Setting up a Camera

  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 20;
  scene.add(camera);

  // LIGHT
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10);
  scene.add(light);

  // Renderer
  const canvas = document.querySelector(".webgl");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);
  renderer.render(scene, camera);

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

  // CONTROLS

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;

  // Loop to
  const loop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();

  return (
    <>
      <nav>
        <a href="/">Sphere</a>

        <ul>
          <li>Explore</li>
          <li>Create</li>
        </ul>
      </nav>
      <h1 className="title">Give it A Spin</h1>
    </>
  );
}

export default App;
