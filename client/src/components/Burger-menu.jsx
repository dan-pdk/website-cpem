import { Link } from 'react-router-dom'

function BurgerMenu({ links, onClose }) {
  return (
    <>
      <div 
        className="fixed inset-0 top-24 bg-primary-dark/40 backdrop-blur-xs z-40 md:hidden animate-[fade-in-left_0.2s_ease-out]" 
        onClick={onClose} 
      />

      <div className="absolute top-24 left-0 w-full bg-bg-100 border-b border-bg-200 shadow-xl z-50 md:hidden animate-[fade-in-left_0.3s_ease-out]">
        <nav className="flex flex-col p-6 gap-4 font-nunito-sans">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="flex items-center justify-between py-2 text-font hover:text-primary font-semibold text-lg border-b border-bg-200 last:border-none transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-primary-light text-sm">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default BurgerMenu
