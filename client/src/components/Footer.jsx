import { Link } from 'react-router-dom'
import logo from '../assets/logo_wide_large.png'

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

function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-bg-100 font-nunito-sans border-t border-primary-light/30">
      <div className="max-w-6xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-base text-bg-100/90 font-medium">
        <p>© {new Date().getFullYear()} CPEM — Coletivo de Professores que Ensinam Matemática.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 rounded-full bg-white/10 text-bg-100 hover:bg-white/25 transition-all duration-200"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/SEU_USUARIO_AQUI"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-full bg-white/10 text-bg-100 hover:bg-white/25 transition-all duration-200"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:contato@coletivocpem.com.br"
            aria-label="E-mail"
            className="p-2.5 rounded-full bg-white/10 text-bg-100 hover:bg-white/25 transition-all duration-200"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
