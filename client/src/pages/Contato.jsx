function Contato() {
  return (
    <section className="px-4 md:px-8 py-16 max-w-xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Contato</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nome" className="border border-slate-300 rounded px-4 py-2" />
        <input type="email" placeholder="Email" className="border border-slate-300 rounded px-4 py-2" />
        <textarea placeholder="Mensagem" rows={5} className="border border-slate-300 rounded px-4 py-2" />
        <button type="submit" className="bg-slate-900 text-white rounded px-4 py-2">
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contato
