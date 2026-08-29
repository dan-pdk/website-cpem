import ScrollFadeIn from './ScrollFadeIn.jsx'
import MaterialCard from './MaterialCard.jsx'
import Button from './Button.jsx'
import { materiaisFake } from '../data/materiais.js'

function FeaturedMaterials() {
  const trackMaterials = [...materiaisFake, ...materiaisFake, ...materiaisFake, ...materiaisFake]

  return (
    <section className="py-12 md:py-20 flex flex-col gap-8 md:gap-10 font-nunito-sans">
      <ScrollFadeIn>
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 px-4">
          <h2 className="text-5xl font-bold text-primary">
            Materiais em{' '}
            <span className="relative inline-block">
              <span className="relative z-10">destaque</span>
              <span className="absolute bottom-1 left-0 right-0 h-[0.35em] bg-accent/40 rounded-sm -z-0" />
            </span>
          </h2>
          <p className="text-font text-base md:text-lg max-w-xl mx-auto">
            Atividades, modelos, documentos, artigos e arquivos produzidos no projeto, para o projeto.
          </p>
        </div>
      </ScrollFadeIn>

      <div className="md:hidden flex flex-col gap-4 px-4 max-w-md mx-auto w-full">
        {materiaisFake.map((material) => (
          <div key={material.id} className="w-full">
            <MaterialCard material={material} />
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-hidden">
        <div className="materials-track flex w-max py-4">
          {trackMaterials.map((material, index) => (
            <div key={`${material.id}-${index}`} className="material-card-item w-72 shrink-0 mr-6">
              <MaterialCard material={material} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Button to="/materiais" variant="primary-outline">
          Ver todos os materiais
        </Button>
      </div>
    </section>
  )
}

export default FeaturedMaterials
