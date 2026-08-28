import { useParams, Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { materiaisFake } from '../data/materiais.js'

function MaterialDetalhe() {
  const { id } = useParams()
  const material = materiaisFake.find((item) => String(item.id) === id)

  if (!material) {
    return (
      <section className="px-4 md:px-8 py-20 max-w-2xl mx-auto flex flex-col items-center text-center gap-6 font-nunito-sans">
        <h1 className="text-2xl font-bold text-primary">Material não encontrado</h1>
        <p className="text-font/70">O material que você está procurando não existe ou foi removido.</p>
        <Button to="/materiais" variant="primary-outline">
          Voltar para materiais
        </Button>
      </section>
    )
  }

  return (
    <section className="px-4 md:px-8 py-16 max-w-6xl mx-auto flex flex-col gap-6 font-nunito-sans">
      <Link to="/materiais" className="text-primary-light hover:text-primary text-sm w-fit">
        ← Voltar para materiais
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-4">
          <img
            src={material.image}
            alt={material.titulo}
            className="w-full h-80 object-cover rounded-lg border border-bg-200"
          />
          <span className="text-xs uppercase text-primary-light font-semibold">{material.tipo}</span>
          <h1 className="text-3xl font-bold text-primary">{material.titulo}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-font/60">
            <span>Autor: {material.autor}</span>
            <span>Publicado em: {material.data}</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-font leading-relaxed">{material.descricao}</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Baixar material</Button>
            <Button variant="primary-outline">Compartilhar</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaterialDetalhe
