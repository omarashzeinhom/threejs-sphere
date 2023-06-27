import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./App.css";

function App() {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const scene = new THREE.Scene();

  // Geometry
  const geometry = new THREE.TorusGeometry(14 ,3, 30, 50,7);
  // Color
  const material = new THREE.MeshStandardMaterial({ color: 0xFFFFF, 
  roughness: 0.3, });
  // Mesh
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);


  // LIGHT
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(1, 50, 52);
  light.intensity = 1.5;
  scene.add(light);
  //2. Setting up a Camera

  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 40;
  scene.add(camera);

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

  // TimeLine Magic

  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  tl.fromTo("nav", { y: "-100%" }, { y: "0%" });
  tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });

  // Mouse Animation Color
  let mouseDown = false;
  let rgb = [12, 25, 27];
  console.log(rgb);
  window.addEventListenere("mousedown", () => (mouseDown = true));
  window.addEventListenere("mouseup", () => (mouseDown = false));

  window.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      rgb = [
        Math.round((e.pageX / sizes.width) * 255),
        Math.round((e.pageY / sizes.height) * 255),
        150,
      ];
      let newColor = new THREE.Color(`rgb${rgb.join(",")}`);
      gsap.to(mesh.material.color, {r: newColor.r, g: newColor.g, b: newColor.b});
    }
  });
  return <></>;
}

export default App;
