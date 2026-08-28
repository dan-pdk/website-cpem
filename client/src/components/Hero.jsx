import { memo } from 'react'
import { HexGrid, Layout, Hexagon } from 'react-hexgrid'
import Button from './Button.jsx'

const HEX_SIZE = { x: 4, y: 4 }
const HEX_SPACING = 1.05
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
      const distance = Math.max(
        Math.abs(q),
        Math.abs(r),
        Math.abs(s)
      )

      let fillColor = 'transparent'

      if (distance >= 5) {
        const densityFactor =
          (distance - 2) / (HEX_RANGE - 2)

        const baseProbability = densityFactor * 0.75

        if (Math.random() < baseProbability) {
          fillColor =
            Math.random() < 0.5
              ? COLOR_A
              : COLOR_B
        }
      }

      items.push({
        q,
        r,
        s,
        fillColor,
      })
    }
  }

  return items
}

const HeroBackgroundGrid = memo(function HeroBackgroundGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
      <HexGrid
        width="100%"
        height="100%"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <Layout
          size={HEX_SIZE}
          flat={false}
          spacing={HEX_SPACING}
          origin={{ x: 0, y: 0 }}
        >
          {HEX_ITEMS.map(({ q, r, s, fillColor }) => (
            <Hexagon
              key={`${q}:${r}:${s}`}
              q={q}
              r={r}
              s={s}
              style={{
                fill: fillColor,
                stroke: 'none',
              }}
            />
          ))}
        </Layout>
      </HexGrid>
    </div>
  )
})

const Hero = memo(function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-6 overflow-hidden bg-bg-100 px-4 py-16 text-center font-nunito-sans md:px-8">

      <HeroBackgroundGrid className="hidden md:block"/>

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="max-w-3xl text-4xl font-bold text-primary md:text-6xl">
          Matemática que conecta professores e salas de aula
        </h1>

        <p className="max-w-2xl text-lg text-font">
          Um coletivo de professores construindo e compartilhando
          materiais, encontros e experiências pra ensinar matemática
          de outro jeito.
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
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
