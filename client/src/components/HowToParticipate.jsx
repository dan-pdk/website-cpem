import ScrollFadeIn from './ScrollFadeIn.jsx'

const passos = [
  { numero: '01', titulo: 'Conheça o coletivo', texto: 'Veja quem somos e o que já construímos até aqui.' },
  { numero: '02', titulo: 'Participe dos encontros', texto: 'Presenciais ou online, abertos a todos os professores.' },
  { numero: '03', titulo: 'Acesse os materiais', texto: 'Use, adapte e compartilhe o que o coletivo produz.' },
]

function HowToParticipate() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-5xl mx-auto flex flex-col gap-10 font-nunito-sans">
      <ScrollFadeIn>
        <h2 className="text-3xl font-bold text-primary text-center">Como participar</h2>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {passos.map((passo) => (
          <ScrollFadeIn key={passo.numero} delay={500} duration={1500}>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-accent">{passo.numero}</span>
              <h3 className="font-semibold text-font">{passo.titulo}</h3>
              <p className="text-font/70">{passo.texto}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  )
}

export default HowToParticipate
