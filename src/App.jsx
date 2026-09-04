import './styles/main.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import LearningJourney from './components/LearningJourney'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <LearningJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
