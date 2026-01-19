import './App.css'
import About from './sections/About'
import Landing from './sections/Landing'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <main className='flex flex-col'>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default App
