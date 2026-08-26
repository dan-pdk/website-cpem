import Button from './Button.jsx'

function FinalCTA() {
  return (
    <section className="bg-primary px-4 md:px-8 py-20 flex flex-col items-center text-center gap-6 font-nunito-sans">
      <h2 className="text-3xl font-bold text-bg-100">Quer fazer parte?</h2>
      <p className="text-bg-100 max-w-xl">
        Fale com a gente e saiba como se juntar ao coletivo.
      </p>
      <Button to="/contato" variant="accent-outline">
        Entre em contato
      </Button>
    </section>
  )
}

export default FinalCTA
