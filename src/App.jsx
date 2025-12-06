import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
  

  return (
    <>
       <div className="App">
        <Navbar/>
        <Hero id="home" />
        <About id="about" />
        <Skills id= "skills" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer/>

       </div>
    </>
  )
}

export default App
