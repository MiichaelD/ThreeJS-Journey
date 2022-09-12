import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

let last_time = Date.now()

// Clock
const clock = new THREE.Clock()

// Gsap
gsap.to(mesh.position, { duration: 1, delay: 1, x: 1})
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0})

// Animations
const tick = () => {
  // Time based
  const time = Date.now()
  const delta = time - last_time
  last_time = time

  // Clock based
  const elapsedTime = clock.getElapsedTime()
  console.log('tick: ' + time + ", delta: " + delta + ", elapsed: " + elapsedTime)


  // Update objects
  mesh.rotation.y += 0.001 * delta

  //Render
  renderer.render(scene, camera)

  //Call tick again on the next frame
  window.requestAnimationFrame(tick)
}
tick()