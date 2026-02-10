import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
 
import LoadingScreen from "./components/LoadingScreen"; // import it

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {/* Show LoadingScreen until it finishes */}
      {!loadingFinished && <LoadingScreen onFinish={() => setLoadingFinished(true)} />}

      {/* Main content is rendered after loadingFinished */}
      {loadingFinished && (
        <div className="App">
          <Navbar />
          <Hero id="home" />
          <About id="about" />
          <Projects id="projects" />
          <Contact id="contact" />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
