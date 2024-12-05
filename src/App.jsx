import './App.css'
import AboutSection from './components/AboutSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Navbar from './components/Navbar'
import ProblemSolution from './components/ProblemSolution'
import USP from './components/USP'
import VideoSection from './components/VideoSection'

function App() {


  return (
    <div>
    <Navbar />
    <Hero />
    <AboutSection />
    <ProblemSolution />
    <USP />
    <Impact />
    {/* <Gallery /> */}
    <VideoSection />
    <CallToAction />
    <Footer />
    </div>
  )
}

export default App
