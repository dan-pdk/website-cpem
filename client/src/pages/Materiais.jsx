const materiaisFake = [
  { id: 1, titulo: 'Atividade de Frações', tipo: 'PDF', data: '2026-03-10' },
  { id: 2, titulo: 'Slides — Geometria Espacial', tipo: 'Slides', data: '2026-04-02' },
  { id: 3, titulo: 'Vídeo — Introdução à Estatística', tipo: 'Link', data: '2026-05-18' },
]

function Materiais() {
  return (
    <section className="px-4 md:px-8 py-16 max-w-5xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Materiais</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {materiaisFake.map((material) => (
          <div key={material.id} className="border border-slate-200 rounded-lg p-4 flex flex-col gap-2">
            <span className="text-xs uppercase text-slate-400">{material.tipo}</span>
            <h2 className="font-semibold">{material.titulo}</h2>
            <span className="text-sm text-slate-500">{material.data}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Materiais
