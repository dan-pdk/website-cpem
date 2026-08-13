import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="w-full bg-bg-100 px-4 md:px-8 py-28 md:py-40 flex flex-col items-center text-center gap-6 font-nunito-sans">
      <h1 className="text-4xl md:text-6xl font-bold text-primary max-w-3xl">
        Matemática que conecta professores e salas de aula
      </h1>
      <p className="text-lg text-font max-w-2xl">
        Um coletivo de professores construindo e compartilhando materiais, encontros e experiências pra ensinar matemática de outro jeito.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          to="/sobre"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Conheça o projeto
        </Link>
        <Link
          to="/materiais"
          className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          Ver materiais
        </Link>
      </div>
    </section>
  )
}

export default Hero
