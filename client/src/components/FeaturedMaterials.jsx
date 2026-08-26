import ScrollFadeIn from './ScrollFadeIn.jsx'
import MaterialCard from './MaterialCard.jsx'
import Button from './Button.jsx'
import { materiaisFake } from '../data/materiais.js'

function FeaturedMaterials() {
  const trackMaterials = [...materiaisFake, ...materiaisFake, ...materiaisFake, ...materiaisFake]

  return (
    <section className="py-20 flex flex-col gap-10 font-nunito-sans">
      <ScrollFadeIn>
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold text-primary">Materiais em destaque</h2>
          <p className="text-font max-w-xl mx-auto">
            Atividades, slides e vídeos produzidos e compartilhados pelo coletivo.
          </p>
        </div>
      </ScrollFadeIn>

      <div className="overflow-hidden">
        <div className="materials-track flex w-max">
          {trackMaterials.map((material, index) => (
            <div key={`${material.id}-${index}`} className="material-card-item w-72 shrink-0 mr-6">
              <MaterialCard material={material} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button to="/materiais" variant="primary-outline">
          Ver todos os materiais
        </Button>
      </div>
    </section>
  )
}

export default FeaturedMaterials
