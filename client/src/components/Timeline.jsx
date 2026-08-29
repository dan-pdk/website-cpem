import ScrollFadeIn from './ScrollFadeIn.jsx'
import { timelineNodes } from '../data/timeline.js'

function Timeline() {
  return (
    <section className="bg-bg-100 px-4 md:px-8 py-12 md:py-20 font-nunito-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col items-center text-center gap-3 md:gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Nossa{' '}
              <span className="relative inline-block">
                <span className="relative z-10">trajetória</span>
                <span className="absolute bottom-1 left-0 right-0 h-[0.35em] bg-accent/40 rounded-sm -z-0" />
              </span>
            </h2>
            <p className="text-font text-base md:text-lg max-w-xl">
              Alguns marcos do coletivo desde o início.
            </p>
          </div>

        <div className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 pl-8 md:pl-0">
          <div className="absolute left-2.5 top-2 bottom-2 w-1 bg-accent rounded-full md:left-2 md:right-2 md:top-[144px] md:bottom-auto md:h-1 md:w-auto" />

          {timelineNodes.map((node) => (
            <ScrollFadeIn key={node.id} delay={node.id * 150}>
              <div className="relative flex flex-col items-start md:items-center gap-3 md:gap-3.5 md:text-center md:w-56 pb-6 md:pb-0">
                {node.imagem && (
                  <div className="w-full max-w-sm overflow-hidden rounded-lg border border-bg-200 shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-md md:order-1">
                    <img
                      src={node.imagem}
                      alt={`Trajetória ${node.data}`}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                )}
                <span className="absolute -left-[29px] top-1 md:static md:left-auto md:top-auto md:order-2 z-10 shrink-0 h-4 w-4 rounded-full bg-accent border-4 border-bg-100" />
                <div className="flex flex-col gap-1 md:items-center md:order-3">
                  <span className="block font-bold text-primary text-lg md:text-xl">{node.data}</span>
                  <p className="text-font text-sm md:text-base leading-relaxed">{node.texto}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
