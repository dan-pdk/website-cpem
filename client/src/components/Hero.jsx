import { memo } from 'react'
import { HexGrid, Layout, Hexagon } from 'react-hexgrid'
import Button from './Button.jsx'


// dead code
const HEX_RANGE = 10
const COLOR_A = '#013879'
const COLOR_B = '#2765AF'

const HEX_ITEMS = createHexItems()

function createHexItems() {
  const items = []
  for (let q = -HEX_RANGE; q <= HEX_RANGE; q++) {
    const rMin = Math.max(-HEX_RANGE, -q - HEX_RANGE)
    const rMax = Math.min(HEX_RANGE, -q + HEX_RANGE)
    for (let r = rMin; r <= rMax; r++) {
      const s = -q - r
      const distance = Math.max(Math.abs(q), Math.abs(r), Math.abs(s))
      let fillColor = 'transparent'
      if (distance >= 5) {
        const densityFactor = (distance - 2) / (HEX_RANGE - 2)
        const baseProbability = densityFactor * 0.75
        if (Math.random() < baseProbability) {
          fillColor = Math.random() < 0.5 ? COLOR_A : COLOR_B
        }
      }
      items.push({ q, r, s, fillColor })
    }
  }
  return items
}

function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

function hexPoints(cx, cy, r, angleDeg = 0) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i + (angleDeg * Math.PI) / 180
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

function sinePath(x0, y0, amplitude, wavelength, cycles, angleDeg = 0) {
  const samples = Math.ceil(cycles * 40)
  const cosA = Math.cos((angleDeg * Math.PI) / 180)
  const sinA = Math.sin((angleDeg * Math.PI) / 180)
  return Array.from({ length: samples + 1 }, (_, i) => {
    const t = i / samples
    const lx = t * wavelength * cycles
    const ly = amplitude * Math.sin(t * Math.PI * 2 * cycles)
    const x = x0 + lx * cosA - ly * sinA
    const y = y0 + lx * sinA + ly * cosA
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
}

function rightAngleMarkerPath(ax, ay, bx, by, cx, cy, size) {
  const lenCA = Math.hypot(ax - cx, ay - cy)
  const lenCB = Math.hypot(bx - cx, by - cy)
  if (lenCA === 0 || lenCB === 0) return ''
  const uax = ((ax - cx) / lenCA) * size
  const uay = ((ay - cy) / lenCA) * size
  const ubx = ((bx - cx) / lenCB) * size
  const uby = ((by - cy) / lenCB) * size
  const p1x = cx + uax, p1y = cy + uay
  const p2x = p1x + ubx, p2y = p1y + uby
  const p3x = cx + ubx, p3y = cy + uby
  return `M ${p1x.toFixed(1)} ${p1y.toFixed(1)} L ${p2x.toFixed(1)} ${p2y.toFixed(1)} L ${p3x.toFixed(1)} ${p3y.toFixed(1)}`
}

const MATH_DECO_ELEMENTS = (() => {
  const rand = seededRandom(Date.now())

  function edge() {
    const zone = Math.floor(rand() * 4)
    if (zone === 0) return { x: rand() * 1440, y: rand() * 300 }
    if (zone === 1) return { x: rand() * 1440, y: 500 + rand() * 300 }
    if (zone === 2) return { x: rand() * 400, y: rand() * 800 }
    return { x: 1040 + rand() * 400, y: rand() * 800 }
  }

  const hexagons = Array.from({ length: 7 }, () => {
    const { x, y } = edge()
    return { cx: x, cy: y, r: 22 + rand() * 42, rotation: rand() * 30, opacity: 0.12 + rand() * 0.08 }
  })

  const circles = Array.from({ length: 7 }, () => {
    const { x, y } = edge()
    return { cx: x, cy: y, r: 18 + rand() * 48, opacity: 0.12 + rand() * 0.08 }
  })

  const triangles = Array.from({ length: 6 }, () => {
    const { x, y } = edge()
    const size = 45 + rand() * 60
    const flip = rand() > 0.5 ? 1 : -1
    const rot = rand() * 360
    const cosR = Math.cos((rot * Math.PI) / 180)
    const sinR = Math.sin((rot * Math.PI) / 180)
    const rotate = (px, py) => ({
      x: x + px * cosR - py * sinR,
      y: y + px * sinR + py * cosR,
    })
    const A = rotate(0, 0)
    const B = rotate(size, 0)
    const C = rotate(0, flip * size)
    return { A, B, C, markerSize: size * 0.13, opacity: 0.12 + rand() * 0.08 }
  })

  const axes = Array.from({ length: 3 }, () => {
    const { x, y } = edge()
    return { ox: x, oy: y, len: 65 + rand() * 75, opacity: 0.12 + rand() * 0.08 }
  })

  const sinewaves = Array.from({ length: 3 }, () => {
    const { x, y } = edge()
    return {
      x0: x,
      y0: y,
      amplitude: 14 + rand() * 20,
      wavelength: 55 + rand() * 40,
      cycles: 1.5 + rand() * 1.5,
      angleDeg: rand() * 50 - 25,
      opacity: 0.12 + rand() * 0.08,
    }
  }) // brutal

  return { hexagons, circles, triangles, axes, sinewaves }
})()

const HeroHexAccent = memo(function HeroHexAccent() {
  return (
    <div className="absolute right-[-120px] top-[-120px] z-0 pointer-events-none opacity-[0.07] hidden md:block">
      <HexGrid width={600} height={600} viewBox="-5 -5 10 10">
        <Layout size={{ x: 4.5, y: 4.5 }} flat={false} spacing={1.01} origin={{ x: 0, y: 0 }}>
          <Hexagon q={0} r={0} s={0} style={{ fill: '#013879', stroke: 'none' }} />
        </Layout>
      </HexGrid>
    </div>
  )
})

const MathDecorations = memo(function MathDecorations() {
  const { hexagons, circles, triangles, axes, sinewaves } = MATH_DECO_ELEMENTS
  const STROKE = '#013879'
  const SW = 1

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="math-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill={STROKE} />
        </marker>
      </defs>

      {hexagons.map((h, i) => (
        <polygon
          key={`hex-${i}`}
          points={hexPoints(h.cx, h.cy, h.r, h.rotation)}
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          opacity={h.opacity}
        />
      ))}

      {circles.map((c, i) => (
        <circle
          key={`cir-${i}`}
          cx={c.cx.toFixed(1)}
          cy={c.cy.toFixed(1)}
          r={c.r.toFixed(1)}
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          opacity={c.opacity}
        />
      ))}

      {triangles.map((t, i) => (
        <g key={`tri-${i}`} opacity={t.opacity}>
          <polygon
            points={`${t.A.x.toFixed(1)},${t.A.y.toFixed(1)} ${t.B.x.toFixed(1)},${t.B.y.toFixed(1)} ${t.C.x.toFixed(1)},${t.C.y.toFixed(1)}`}
            fill="none"
            stroke={STROKE}
            strokeWidth={SW}
          />
          <path
            d={rightAngleMarkerPath(t.B.x, t.B.y, t.C.x, t.C.y, t.A.x, t.A.y, t.markerSize)}
            fill="none"
            stroke={STROKE}
            strokeWidth={SW}
          />
        </g>
      ))}

      {axes.map((a, i) => (
        <g key={`ax-${i}`} opacity={a.opacity}>
          <line
            x1={(a.ox - a.len).toFixed(1)} y1={a.oy.toFixed(1)}
            x2={(a.ox + a.len).toFixed(1)} y2={a.oy.toFixed(1)}
            stroke={STROKE} strokeWidth={SW}
            markerEnd="url(#math-arrow)"
          />
          <line
            x1={a.ox.toFixed(1)} y1={(a.oy + a.len).toFixed(1)}
            x2={a.ox.toFixed(1)} y2={(a.oy - a.len).toFixed(1)}
            stroke={STROKE} strokeWidth={SW}
            markerEnd="url(#math-arrow)"
          />
        </g>
      ))}

      {sinewaves.map((s, i) => (
        <path
          key={`sin-${i}`}
          d={sinePath(s.x0, s.y0, s.amplitude, s.wavelength, s.cycles, s.angleDeg)}
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          opacity={s.opacity}
        />
      ))}
    </svg>
  )
})

const Hero = memo(function Hero() {
  return (
    <section className="bg-math-grid relative flex min-h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-6 overflow-hidden px-6 py-12 text-center font-nunito-sans md:px-8 md:py-16">

      <HeroHexAccent />
      <MathDecorations />

      <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_40%,black_100%)] bg-bg-100/70" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-5 text-center">
        <h1 className="max-w-3xl text-3xl sm:text-4xl font-bold text-primary md:text-6xl leading-tight sm:leading-none">
          Matemática que{' '}
          <span className="relative inline-block">
            <span className="relative z-10">conecta</span>
            <span className="absolute bottom-1 left-0 right-0 h-[0.35em] bg-accent/40 rounded-sm -z-0" />
          </span>
          {' '}professores e salas de aula
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-font">
          Um coletivo de professores construindo e compartilhando
          materiais, encontros e experiências pra ensinar matemática
          de outro jeito.
        </p>

        <div className="mt-4 flex flex-col w-full sm:w-auto gap-3 sm:flex-row sm:justify-center">
          <Button to="/sobre" variant="primary">
            Conheça o projeto
          </Button>

          <Button to="/materiais" variant="primary-outline">
            Ver materiais
          </Button>
        </div>
      </div>
    </section>
  )
})

export default Hero
