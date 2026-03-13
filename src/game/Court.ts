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

function makeNetTexture(): THREE.CanvasTexture {
  const W = 1024, H = 256
  const canvas = document.createElement('canvas')
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')!

  ctx.clearRect(0, 0, W, H)

  // Diamond net pattern
  const cellW = 32, cellH = 32
  ctx.strokeStyle = 'rgba(230,230,230,0.9)'
  ctx.lineWidth = 2

  // Diagonal lines ↗
  for (let i = -H; i < W + H; i += cellW) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + H, H); ctx.stroke()
  }
  // Diagonal lines ↘
  for (let i = -H; i < W + H; i += cellH) {
    ctx.beginPath(); ctx.moveTo(i, H); ctx.lineTo(i + H, 0); ctx.stroke()
  }

  // Top tape (white band)
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, W, 18)

  // Bottom edge
  ctx.fillRect(0, H - 6, W, 6)

  return new THREE.CanvasTexture(canvas)
}

function createPalmTree(position: THREE.Vector3): THREE.Group {
  const tree = new THREE.Group()
  tree.position.copy(position)

  // Trunk
  const trunkGeo = new THREE.CylinderGeometry(0.4, 0.5, 8, 8)
  const trunkMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b })
  const trunk = new THREE.Mesh(trunkGeo, trunkMat)
  trunk.position.y = 4
  trunk.castShadow = true
  tree.add(trunk)

  // Foliage (sphere clusters)
  const foliageColors = [0x2d5016, 0x3d6b1f, 0x4a7c2e]
  for (let i = 0; i < 3; i++) {
    const foliageGeo = new THREE.SphereGeometry(2.5, 8, 8)
    const foliageMat = new THREE.MeshLambertMaterial({ color: foliageColors[i % 3] })
    const foliage = new THREE.Mesh(foliageGeo, foliageMat)
    foliage.position.set(
      Math.cos((i / 3) * Math.PI * 2) * 1.2,
      8 + i * 0.5,
      Math.sin((i / 3) * Math.PI * 2) * 1.2
    )
    foliage.castShadow = true
    tree.add(foliage)
  }

  return tree
}


export class Court {
  readonly object3D: THREE.Group
  readonly ocean: THREE.Mesh | null

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

    // Palmiers around the court
    const palmPositions = [
      new THREE.Vector3(-20, 0, -25),
      new THREE.Vector3(20, 0, -25),
      new THREE.Vector3(-25, 0, 25),
      new THREE.Vector3(25, 0, 25),
      new THREE.Vector3(-18, 0, 20),
      new THREE.Vector3(18, 0, 20),
    ]
    for (const pos of palmPositions) {
      this.object3D.add(createPalmTree(pos))
    }

    // ── Net ──────────────────────────────────────────────────────
    const netTex = makeNetTexture()
    netTex.wrapS = THREE.RepeatWrapping
    netTex.repeat.set(COURT_Z * 2 / 2, 1)

    const netMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(COURT_Z * 2, NET_HEIGHT),
      new THREE.MeshBasicMaterial({ map: netTex, side: THREE.DoubleSide, transparent: true }),
    )
    netMesh.rotation.y = Math.PI / 2
    netMesh.position.y = NET_HEIGHT / 2
    this.object3D.add(netMesh)

    // Top tape rope
    const tapeGeo = new THREE.BoxGeometry(NET_THICKNESS + 0.05, 0.08, COURT_Z * 2)
    const tapeMat = new THREE.MeshLambertMaterial({ color: 0xeeeeee })
    const tape = new THREE.Mesh(tapeGeo, tapeMat)
    tape.position.y = NET_HEIGHT
    this.object3D.add(tape)

    // Side posts
    const postGeo = new THREE.CylinderGeometry(0.06, 0.06, NET_HEIGHT + 0.4, 10)
    const postMat = new THREE.MeshLambertMaterial({ color: 0x999999 })
    for (const z of [-COURT_Z, COURT_Z]) {
      const post = new THREE.Mesh(postGeo, postMat)
      post.position.set(0, (NET_HEIGHT + 0.4) / 2, z)
      this.object3D.add(post)
    }

    // Side boundary walls
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x888866, transparent: true, opacity: 0.18 })
    for (const z of [-COURT_Z, COURT_Z]) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(COURT_X * 2, 0.12, 0.04), wallMat)
      wall.position.set(0, 0.06, z)
      this.object3D.add(wall)
    }
  }

  updateOcean(dt: number) {
    if (!this.ocean) return
    const time = ((this.ocean as any).animationTime += dt * 0.5)
    const positions = this.ocean.geometry.attributes.position
    const basePositions = (this.ocean as any).basePositions

    for (let i = 0; i < positions.count; i++) {
      const x = basePositions[i * 3]
      const z = basePositions[i * 3 + 2]
      const wave1 = Math.sin(x * 0.15 + time) * 0.3
      const wave2 = Math.sin(z * 0.1 + time * 0.8) * 0.2
      positions.setY(i, basePositions[i * 3 + 1] + wave1 + wave2)
    }
    positions.needsUpdate = true
  }
}
