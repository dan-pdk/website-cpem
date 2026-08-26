import Hero from '../components/Hero.jsx'
import AboutUs from '../components/About-us.jsx'
import FeaturedMaterials from '../components/FeaturedMaterials.jsx'
import HowToParticipate from '../components/HowToParticipate.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

function Home() {
  return <div className='overflow-x-hidden'>
    <Hero />
    <AboutUs />
    <FeaturedMaterials />
    <HowToParticipate />
    <FinalCTA />
  </div>
}

export default Home
