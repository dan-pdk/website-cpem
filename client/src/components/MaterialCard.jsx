import { Link } from 'react-router-dom'

function MaterialCard({ material }) {
  return (
    <Link
      to={`/materiais/${material.id}`}
      className="border border-bg-200 rounded-lg overflow-hidden flex flex-col font-nunito-sans transition-transform duration-170 hover:scale-102"
    >
      <img src={material.image} alt={material.titulo} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs uppercase text-primary-light font-semibold">{material.tipo}</span>
        <h3 className="font-semibold text-font">{material.titulo}</h3>
        <span className="text-sm text-primary-light">{material.data}</span>
      </div>
    </Link>
  )
}

export default MaterialCard
