import Hero from '../components/Hero.jsx'
import AboutUs from '../components/About-us.jsx'
import FeaturedMaterials from '../components/FeaturedMaterials.jsx'
import WhereToFind from '../components/Where-to-find.jsx'
import FAQ from '../components/FAQ.jsx'
import Timeline from '../components/Timeline.jsx'

function Home() {
  return <div className='overflow-x-hidden'>
    <Hero />
    <AboutUs />
    <FeaturedMaterials />
    <WhereToFind />
    <Timeline />
    <FAQ />
  </div>
}

export default Home
