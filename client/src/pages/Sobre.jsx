import ScrollFadeIn from '../components/ScrollFadeIn.jsx'
import Timeline from '../components/Timeline.jsx'
import Button from '../components/Button.jsx'
import { fotosSobre } from '../data/fotos-sobre.js'
import logo from '../assets/logo.png'

function Sobre() {
  return (
    <div className="w-full flex flex-col font-nunito-sans bg-bg-100 overflow-hidden">
      
      <section className="bg-math-grid relative flex flex-col items-center justify-center px-4 md:px-8 py-20 md:py-32 w-full text-center overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0 z-0 mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_40%,black_100%)] bg-bg-100/70" />

        <img 
          src={logo} 
          alt="CPEM" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-md opacity-25 z-1" 
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-6">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Sobre o{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Coletivo</span>
                <span className="absolute bottom-1 left-0 right-0 h-[0.35em] bg-accent/40 rounded-sm z-0" />
              </span>
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={150}>
            <p className="text-font text-lg md:text-xl leading-relaxed mt-4">
              Nossa missão é promover espaços de formação, troca de experiências, proposição de materiais e contribuição contínua para um ensino de matemática cada vez mais significativo.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 bg-white border-y border-bg-200">
        <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">

          <ScrollFadeIn direction="up">
            <div className="flex flex-col gap-4 border-l-4 border-accent pl-6">
              <h2 className="text-3xl font-bold text-primary">Para quem é o CPEM?</h2>
              <div className="text-font text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  O Coletivo de Professores que Ensinam Matemática não é um grupo somente para profissionais formados em matemática, mas para <b>todos os educadores que têm contato com a disciplina</b>.
                </p>
                <p>
                  Nosso projeto engloba desde professores da <b>Educação Básica</b> até o <b>Ensino Superior</b>, focando na formação continuada de educadores que buscam repensar, inovar e trocar vivências reais de sala de aula.
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn direction="up" delay={150}>
            <div className="flex flex-col gap-4 border-l-4 border-primary-light pl-6">
              <h2 className="text-3xl font-bold text-primary">Como funcionam os encontros?</h2>
              <div className="text-font text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  Os ciclos do projeto duram <b>um ano</b>, com aberturas de novas inscrições sempre no mês de Março. A participação é <b>completamente gratuita</b> (gastos opcionais incluem apenas produtos do projeto, como camisetas).
                </p>
                <p>
                  Nossos encontros presenciais acontecem no <b>IFPR Campus Assis Chateaubriand</b>, de forma quinzenal, às quartas-feiras, das 19h às 21h.
                </p>
                <p>
                  Além do enriquecimento profissional, os participantes oficialmente registrados que comparecem aos encontros recebem um certificado de até <b>40h</b> ao final do ciclo anual. E se você não puder estar presencialmente, pode acompanhar nossos materiais por aqui e interagir pelo nosso grupo de WhatsApp!
                </p>
              </div>
            </div>
          </ScrollFadeIn>

        </div>
      </section>

      <div className="py-8 bg-bg-100">
         <Timeline />
      </div>

      <section className="px-4 md:px-8 py-16 bg-white border-t border-bg-200">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <ScrollFadeIn>
            <div className="text-center mb-4">
              <h2 className="text-5xl font-bold text-primary">Galeria</h2>
              <p className="text-font mt-3 text-lg">Confira alguns momentos importantes da nossa trajetória.</p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {fotosSobre.map((foto, index) => (
              <ScrollFadeIn key={foto.id} delay={index % 2 == 0 ? 0 : 150}>
                <div className="flex flex-col gap-3 group">
                  <div className="overflow-hidden rounded-lg shadow-md border border-bg-200">
                    <img 
                      src={foto.src} 
                      alt={foto.alt} 
                      className="w-full h-auto object-cover aspect-3/2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-font text-center text-sm md:text-base px-2 italic">
                    {foto.caption}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      { /* <section className="px-4 md:px-8 py-16 md:py-24 bg-primary text-bg-100 flex flex-col items-center text-center gap-8 border-t border-primary-light">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Faça parte dessa história com a gente
          </h2>
          <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-bg-200">
            Junte-se ao nosso grupo para construir e compartilhar materiais, vivenciar encontros enriquecedores e ensinar matemática de outro jeito.
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={200}>
          <Button variant="accent-outline" to="/contato" className="text-lg px-8 py-4">
            Quero Participar →
          </Button>
        </ScrollFadeIn>
      </section> */}

    </div>
  )
}

export default Sobre