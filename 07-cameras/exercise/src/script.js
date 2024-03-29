import './style.css'
import * as THREE from 'three'
import { CustomizeRule } from 'webpack-merge'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/** 
 * Cursor
 */
const cursor = {
  x: 0,
  y: 0
}

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = -(event.clientY / sizes.height - 0.5)
  console.log(cursor.x)
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(
  /*FOV=*/75, 
  /*Ratio=*/sizes.width / sizes.height,
  /*Near=*/1,
  /*Far=*/1000)
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)

// Controlls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()
const amplitud = 3

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // React to mouse
    // camera.position.x = cursor.x * amplitud;
    // camera.position.y = cursor.y * amplitud;

    // Full revolution
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
    // camera.position.y = cursor.y * amplitud;
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
    // camera.lookAt(mesh.position)

    // Update objects
    // mesh.rotation.y = elapsedTime;
    // console.log(elapsedTime)

    // Needed for damping
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

console.log('tick')
tick()