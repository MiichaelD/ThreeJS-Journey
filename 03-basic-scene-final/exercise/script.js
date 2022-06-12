// Sizes
const sizes = {
  width: 800,
  height: 600
}

// HTML Canvas to draw the renderer outout.
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Add object to the scene
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(/*FOVinDeg=*/75, /*AspectRatio=*/sizes.width / sizes.height);
scene.add(camera);
camera.position.z = 3;


// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera)