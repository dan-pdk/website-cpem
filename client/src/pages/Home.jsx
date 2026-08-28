import Hero from '../components/Hero.jsx'
import AboutUs from '../components/About-us.jsx'
import FeaturedMaterials from '../components/FeaturedMaterials.jsx'
import HowToParticipate from '../components/HowToParticipate.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import AboutProject from '../components/About-project.jsx'

function Home() {
  return <div className='overflow-x-hidden'>
    <Hero />
    <AboutUs />
    <FeaturedMaterials />
    <AboutProject />
    <HowToParticipate />
    <FinalCTA />
  </div>
}

export default Home
