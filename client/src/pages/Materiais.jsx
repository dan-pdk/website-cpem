import MaterialCard from '../components/MaterialCard.jsx'
import { materiaisFake } from '../data/materiais.js'

function Materiais() {
  return (
    <section className="px-4 md:px-8 py-16 max-w-5xl mx-auto flex flex-col gap-8 font-nunito-sans">
      <h1 className="text-3xl font-bold text-primary">Materiais</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {materiaisFake.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </section>
  )
}

export default Materiais
