import { Link } from 'react-router-dom'
import logo from '../assets/logo_wide_large_whitefont.png'

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

function PinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-7.58 7-12A7 7 0 0 0 5 9c0 4.42 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Início', to: '/' },
  { label: 'Sobre o projeto', to: '/sobre' },
  { label: 'Materiais', to: '/materiais' },
  { label: 'Contato', to: '/contato' },
]

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/link',
    icon: WhatsAppIcon,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/link',
    icon: InstagramIcon,
  },
  {
    label: 'cpem.assis@gmail.com',
    href: 'mailto:cpem.assis@gmail.com',
    icon: MailIcon,
  },
]

function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-bg-100 font-nunito-sans border-t border-primary-light">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div className="flex flex-col gap-4">
          <Link to="/">
            <img src={logo} alt="Logo CPEM" className="h-12" />
          </Link>
          <p className="text-bg-100 text-sm leading-relaxed max-w-xs">
            Coletivo de Professores que Ensinam Matemática: professores construindo e
            compartilhando materiais, encontros e experiências para ensinar matemática
            de outro jeito.
          </p>
          <div className="flex items-start gap-2 text-bg-100 text-sm">
            <PinIcon className="h-5 w-5 shrink-0 mt-0.5" />
            <span><a href="https://ifpr.edu.br" target='_blank' className='font-bold underline hover:text-accent'>IFPR Campus Assis Chateaubriand</a><br />Quinzenalmente, nas quartas-feiras, 19h-21h</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-bg-100 font-bold text-lg">Links rápidos</h3>
          <nav className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-bg-100 text-sm hover:text-accent transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-bg-100 font-bold text-lg">Redes e contato</h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-bg-100 text-sm hover:text-accent transition-colors w-fit"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {social.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-light">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-bg-100">
          <p>© {new Date().getFullYear()} CPEM — Coletivo de Professores que Ensinam Matemática.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
