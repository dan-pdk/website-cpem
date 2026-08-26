function MaterialCard({ material }) {
  return (
    <div className="border border-bg-200 rounded-lg overflow-hidden flex flex-col font-nunito-sans">
      <img src={material.image} alt={material.titulo} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs uppercase text-primary-light font-semibold">{material.tipo}</span>
        <h3 className="font-semibold text-font">{material.titulo}</h3>
        <span className="text-sm text-font/60">{material.data}</span>
      </div>
    </div>
  )
}

export default MaterialCard
