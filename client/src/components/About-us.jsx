import ScrollFadeIn from "./ScrollFadeIn"
import logo from "../assets/logo.png"
import Button from "./Button.jsx"

function AboutUs() {
    return <div className="w-full bg-primary grid grid-cols-1 md:grid-cols-2 md:h-116 font-nunito-sans">
        <div className="px-10 py-12 flex flex-col items-start gap-10">
            <ScrollFadeIn>
                <h1 className="text-bg-100 text-5xl font-bold">Quem nós somos</h1>
            </ScrollFadeIn>
            <ScrollFadeIn>
                <p className="text-bg-100 text-1xl">O Coletivo de Professores que Ensinam Matemática é um projeto iniciado em <b>2024</b> que consiste na troca coletiva de informações entre professores que ensinam matemática, desde a <b>Educação Básica</b> até o <b>Ensino Superior</b>.</p>
            </ScrollFadeIn>
            <ScrollFadeIn>
                <p className="text-bg-100">Nossa missão é fazer x, y, z, tentar coisas, propor materiais, e contribuir para um mundo onde o ensino de matemática se torna cada vez melhor.</p>
            </ScrollFadeIn>
            <Button variant="accent-outline">
               Quero Participar →
            </Button>
        </div>

            <div className="hidden md:block pointer-events-none overflow-hidden mask-[linear-gradient(to_left,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_left,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)]">
                <ScrollFadeIn duration={4500} direction="left"><img src={logo} alt="Logo" className="h-full w-full object-cover opacity-20 scale-[1.8]" /></ScrollFadeIn>
            </div>
    </div>
}

export default AboutUs
