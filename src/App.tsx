import './App.css'
import About from './sections/About'
import Footer from './sections/Footer'
import Landing from './sections/Landing'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <main className='flex flex-col w-full'>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
