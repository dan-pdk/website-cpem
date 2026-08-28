import { useState } from 'react'
import ScrollFadeIn from './ScrollFadeIn.jsx'
import Button from './Button.jsx'

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

function PinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-7.58 7-12A7 7 0 0 0 5 9c0 4.42 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

const options = {
  whatsapp: {
    label: 'WhatsApp',
    icon: WhatsAppIcon,
    title: 'Fale com a gente no WhatsApp',
    text: 'Entre no nosso grupo pra ficar por dentro dos próximos encontros e trocar ideias com outros professores.',
    actionLabel: 'Entrar no grupo',
    href: 'https://chat.whatsapp.com/SEU_LINK_AQUI',
    glow: 'bg-green-400',
  },
  instagram: {
    label: 'Instagram',
    icon: InstagramIcon,
    title: 'Acompanhe no Instagram',
    text: 'Fotos dos encontros, materiais e novidades do coletivo, tudo por lá.',
    actionLabel: 'Seguir no Instagram',
    href: 'https://instagram.com/SEU_USUARIO_AQUI',
    glow: 'bg-pink-400',
  },
  presencial: {
    label: 'Presencialmente',
    icon: PinIcon,
    title: 'Participe presencialmente',
    text: 'Nossos encontros presenciais acontecem em Assis Chateaubriand. Preencha o formulário pra saber a próxima data e local.',
    actionLabel: 'Formulário de inscrição',
    href: 'https://forms.gle/SEU_FORMULARIO_AQUI',
    glow: 'bg-accent',
  },
}

function WhereToFind() {
  const [selected, setSelected] = useState('whatsapp')
  const option = options[selected]
  const Icon = option.icon

  return (
    <div className="w-full bg-primary-light grid grid-cols-1 md:grid-cols-2 md:h-112 font-nunito-sans">
      <div className="px-10 py-12 flex flex-col items-start gap-8">
        <ScrollFadeIn>
          <h1 className="text-bg-100 text-5xl font-bold">Onde estamos</h1>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p className="text-bg-100 text-1xl">
            Escolha como prefere acompanhar o coletivo e participar dos nossos encontros.
          </p>
        </ScrollFadeIn>

        <div className="flex flex-wrap gap-3">
          {Object.entries(options).map(([key, opt]) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`px-5 py-2.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                selected === key
                  ? 'bg-bg-100 text-primary-dark'
                  : 'bg-white/15 text-bg-100 hover:bg-white/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden px-10 py-12 flex flex-col items-start justify-center gap-4">
        <div
          className={`absolute inset-0 ${option.glow} opacity-50 blur-3xl pointer-events-none mask-[linear-gradient(to_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)] [-webkit-mask-image:linear-gradient(to_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)]`}
        />

        <div key={selected} className="relative flex flex-col items-start gap-4 animate-[fade-in-left_0.4s_ease-out]">
          <Icon className="h-16 w-16 text-bg-100" />
          <h2 className="text-2xl font-bold text-bg-100">{option.title}</h2>
          <p className="text-bg-100">{option.text}</p>
          <Button href={option.href} variant="light" className="relative">
            {option.actionLabel}
          </Button>
        </div>

        <div
          key={`qr-${selected}`}
          className="absolute bottom-6 right-6 flex flex-col items-center gap-2 animate-[fade-in-left_0.4s_ease-out]"
        >
          <span className="text-xs text-bg-100/70">Ou escaneie o QR code</span>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(option.href)}`}
            alt={`QR code para ${option.label}`}
            className="h-24 w-24 rounded-md bg-bg-100 p-1"
          />
        </div>
      </div>
    </div>
  )
}

export default WhereToFind
