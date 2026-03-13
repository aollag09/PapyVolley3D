import * as THREE from 'three'
import { COURT_X, COURT_Z, NET_HEIGHT, NET_THICKNESS } from './constants'

function makeSandTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512
  const canvas = document.createElement('canvas')
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')!

  // Wood base
  ctx.fillStyle = '#c8974a'
  ctx.fillRect(0, 0, W, H)

  // Plank grain lines
  const plankH = H / 14
  for (let i = 0; i < 15; i++) {
    const y = i * plankH
    ctx.fillStyle = i % 2 === 0 ? '#be8c42' : '#d0a050'
    ctx.fillRect(0, y, W, plankH)
    // grain
    ctx.strokeStyle = 'rgba(140,80,20,0.18)'
    ctx.lineWidth = 0.8
    for (let g = 0; g < 6; g++) {
      ctx.beginPath()
      ctx.moveTo(0, y + (g / 6) * plankH)
      ctx.lineTo(W, y + (g / 6) * plankH + (Math.random() - 0.5) * 4)
      ctx.stroke()
    }
  }

  // Plank separators
  ctx.strokeStyle = 'rgba(100,60,10,0.4)'
  ctx.lineWidth = 1.5
  for (let i = 0; i <= 14; i++) {
    ctx.beginPath(); ctx.moveTo(0, i * plankH); ctx.lineTo(W, i * plankH); ctx.stroke()
  }

  // Court lines (drawn on top in the UV space)
  // UV: x=0 → world x=-COURT_X, x=W → world x=+COURT_X
  //     y=0 → world z=-COURT_Z, y=H → world z=+COURT_Z
  const toU = (wx: number) => ((wx + COURT_X) / (COURT_X * 2)) * W
  const toV = (wz: number) => ((wz + COURT_Z) / (COURT_Z * 2)) * H

  ctx.strokeStyle = 'rgba(255,255,255,0.85)'
  ctx.lineWidth = 5

  // Boundary
  ctx.strokeRect(toU(-COURT_X) + 3, toV(-COURT_Z) + 3, W - 6, H - 6)
  // Centre line
  ctx.beginPath(); ctx.moveTo(toU(0), toV(-COURT_Z)); ctx.lineTo(toU(0), toV(COURT_Z)); ctx.stroke()

  // Attack lines (~3m from net in real volley, ~30% of half)
  const att = COURT_X * 0.42
  ctx.setLineDash([12, 8])
  ctx.lineWidth = 3
  ctx.beginPath(); ctx.moveTo(toU(-att), toV(-COURT_Z)); ctx.lineTo(toU(-att), toV(COURT_Z)); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(toU(att),  toV(-COURT_Z)); ctx.lineTo(toU(att),  toV(COURT_Z)); ctx.stroke()
  ctx.setLineDash([])

  return new THREE.CanvasTexture(canvas)
}

function makeWallTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512
  const canvas = document.createElement('canvas')
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')!

  // Red brick base color
  ctx.fillStyle = '#c84c3c'
  ctx.fillRect(0, 0, W, H)

  // Brick pattern with alternating rows (larger for less visible repetition)
  const brickW = 128, brickH = 64
  const brickRows = Math.ceil(H / brickH)
  const bricksPerRow = Math.ceil(W / brickW)

  for (let row = 0; row < brickRows; row++) {
    const offsetX = (row % 2) * (brickW / 2)
    for (let col = 0; col < bricksPerRow + 1; col++) {
      const x = col * brickW + offsetX
      const y = row * brickH

      // Red brick color variation
      const shade = Math.random() * 0.1
      ctx.fillStyle = `hsl(10, 55%, ${40 + shade * 100}%)`
      ctx.fillRect(x, y, brickW - 2, brickH - 2)

      // Brick border (grout)
      ctx.strokeStyle = 'rgba(200, 180, 170, 0.4)'
      ctx.lineWidth = 2
      ctx.strokeRect(x, y, brickW - 2, brickH - 2)

      // Subtle texture within brick
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      for (let i = 0; i < 8; i++) {
        const px = x + Math.random() * (brickW - 2)
        const py = y + Math.random() * (brickH - 2)
        ctx.beginPath()
        ctx.arc(px, py, Math.random() * 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  return new THREE.CanvasTexture(canvas)
}

export class Court {
  readonly object3D: THREE.Group
  
  constructor() {
    this.object3D = new THREE.Group()

    // Floor with sand texture
    const floorTex = makeSandTexture()
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(COURT_X * 2, COURT_Z * 2),
      new THREE.MeshLambertMaterial({ map: floorTex }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    this.object3D.add(floor)

   


    // ── Wall ──────────────────────────────────────────────────────
    const wallTex = makeWallTexture()
    wallTex.wrapS = THREE.RepeatWrapping
    wallTex.wrapT = THREE.RepeatWrapping
    wallTex.repeat.set(COURT_Z * 2 / 4, NET_HEIGHT / 4)

    const wallGeo = new THREE.BoxGeometry(NET_THICKNESS, NET_HEIGHT, COURT_Z * 2)
    const netWallMat = new THREE.MeshLambertMaterial({ map: wallTex })
    const wall = new THREE.Mesh(wallGeo, netWallMat)
    wall.position.y = NET_HEIGHT / 2
    wall.castShadow = true
    wall.receiveShadow = true
    this.object3D.add(wall)

    // Top cap with brick texture
    const capGeo = new THREE.BoxGeometry(NET_THICKNESS, 0.2, COURT_Z * 2)
    const capMat = new THREE.MeshLambertMaterial({ map: wallTex })
    const cap = new THREE.Mesh(capGeo, capMat)
    cap.position.y = NET_HEIGHT
    cap.castShadow = true
    cap.receiveShadow = true
    this.object3D.add(cap)

    // Side boundary walls
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x888866, transparent: true, opacity: 0.18 })
    for (const z of [-COURT_Z, COURT_Z]) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(COURT_X * 2, 0.12, 0.04), wallMat)
      wall.position.set(0, 0.06, z)
      this.object3D.add(wall)
    }
  }

}
