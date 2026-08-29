import ScrollFadeIn from "./ScrollFadeIn"
import logo from "../assets/logo.png"
import Button from "./Button.jsx"

function AboutUs() {
    return <div className="relative w-full bg-primary grid grid-cols-1 md:grid-cols-2 min-h-100 font-nunito-sans overflow-hidden">
        <div className="relative z-10 px-6 py-10 md:px-10 md:py-12 flex flex-col items-start gap-6 md:gap-8">
            <ScrollFadeIn>
                <h1 className="text-bg-100 text-3xl sm:text-4xl md:text-5xl font-bold">
                  Quem nós{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">somos</span>
                    <span className="absolute bottom-1 left-0 right-0 h-[0.35em] bg-accent/40 rounded-sm -z-0" />
                  </span>
                </h1>
            </ScrollFadeIn>
            <ScrollFadeIn>
                <p className="text-bg-100 text-base md:text-lg">O Coletivo de Professores que Ensinam Matemática é um projeto iniciado em <b>2024</b> que consiste na troca coletiva de informações entre professores que ensinam matemática, desde a <b>Educação Básica</b> até o <b>Ensino Superior</b>.</p>
            </ScrollFadeIn>
            <ScrollFadeIn>
                <p className="text-bg-100/90 text-sm md:text-base">Nossa missão é promover espaços de formação, troca de experiências, proposição de materiais e contribuição contínua para um ensino de matemática cada vez mais significativo.</p>
            </ScrollFadeIn>
            <Button variant="accent-outline" to="/sobre">
               Quero Participar →
            </Button>
        </div>

        <div className="hidden md:block absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none overflow-hidden opacity-20 mask-[linear-gradient(to_left,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_left,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)]">
            <ScrollFadeIn duration={4500} direction="left" className="h-full w-full">
                <img src={logo} alt="Logo" className="h-full w-full object-cover scale-[1.6]" />
            </ScrollFadeIn>
        </div>
    </div>
}

export default AboutUs
