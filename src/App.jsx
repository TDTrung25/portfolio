import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
