import { Link } from 'react-router-dom'

function BurgerMenu({ links, onClose }) {
  return (
    <div className="absolute top-24 left-0 w-full bg-white border-b border-slate-200 md:hidden">
      <nav className="flex flex-col px-4 py-4 gap-4">
        {links.map((link) => (
          <Link key={link.to} to={link.to} onClick={onClose} className="text-slate-700 hover:text-slate-900 ">
            <p className='font-nunito-sans'>{link.label}</p>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default BurgerMenu
