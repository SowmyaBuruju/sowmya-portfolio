"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Create stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 10000
    const posArray = new Float32Array(starsCount * 3)
    const scaleArray = new Float32Array(starsCount)

    for (let i = 0; i < starsCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 200
      posArray[i + 1] = (Math.random() - 0.5) * 200
      posArray[i + 2] = (Math.random() - 0.5) * 200
      scaleArray[i / 3] = Math.random()
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    starsGeometry.setAttribute("scale", new THREE.BufferAttribute(scaleArray, 1))

    const starsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        attribute float scale;
        uniform float time;
        varying float vScale;
        void main() {
          vScale = scale;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (150.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;
        varying float vScale;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          if (distanceToCenter > 0.5) discard;
          float brightness = 0.7 + 0.3 * sin(time * (3.0 + vScale * 5.0));
          gl_FragColor = vec4(brightness, brightness, brightness, 1.0);
        }
      `,
      transparent: true,
    })

    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Create galaxy spiral
    const galaxyGeometry = new THREE.BufferGeometry()
    const galaxyPositions = []
    const galaxyColors = []
    const galaxyCount = 50000

    for (let i = 0; i < galaxyCount; i++) {
      const t = Math.random() * Math.PI * 2
      const r = Math.random() * 50 + 10
      const x = r * Math.cos(t)
      const y = (Math.random() - 0.5) * 2
      const z = r * Math.sin(t)

      galaxyPositions.push(x, y, z)

      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.4 + Math.random() * 0.3)
      galaxyColors.push(color.r, color.g, color.b)
    }

    galaxyGeometry.setAttribute("position", new THREE.Float32BufferAttribute(galaxyPositions, 3))
    galaxyGeometry.setAttribute("color", new THREE.Float32BufferAttribute(galaxyColors, 3))

    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial)
    scene.add(galaxy)

    // Create nebulae
    const createNebula = (x: number, y: number, z: number, color: THREE.Color) => {
      const nebulaGeometry = new THREE.BufferGeometry()
      const nebulaPositions = []
      const nebulaColors = []
      const nebulaCount = 1000

      for (let i = 0; i < nebulaCount; i++) {
        const rx = Math.random() * 10 - 5
        const ry = Math.random() * 10 - 5
        const rz = Math.random() * 10 - 5

        nebulaPositions.push(x + rx, y + ry, z + rz)

        const nebulaColor = color.clone()
        nebulaColor.multiplyScalar(0.5 + Math.random() * 0.5)
        nebulaColors.push(nebulaColor.r, nebulaColor.g, nebulaColor.b)
      }

      nebulaGeometry.setAttribute("position", new THREE.Float32BufferAttribute(nebulaPositions, 3))
      nebulaGeometry.setAttribute("color", new THREE.Float32BufferAttribute(nebulaColors, 3))

      const nebulaMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
      })

      return new THREE.Points(nebulaGeometry, nebulaMaterial)
    }

    const nebula1 = createNebula(30, 10, -20, new THREE.Color(0xff5555))
    const nebula2 = createNebula(-40, -15, 10, new THREE.Color(0x5555ff))
    scene.add(nebula1, nebula2)

    // Camera position
    camera.position.z = 50

    // Animation
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      stars.rotation.y += 0.0002
      galaxy.rotation.y += 0.0001
      nebula1.rotation.y += 0.0003
      nebula2.rotation.y -= 0.0002

      camera.position.x += (mouseX * 10 - camera.position.x) * 0.05
      camera.position.y += (-mouseY * 10 - camera.position.y) * 0.05

      camera.lookAt(scene.position)

      // Update star blinking
      starsMaterial.uniforms.time.value = elapsedTime

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10" />
}

export default Background3D

