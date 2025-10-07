import Navbar from './components/Navbar';
import Interface from './pages/Interface';
import About from './pages/About';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Edu from './pages/Edu';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <section id="home" data-aos="fade-up">
          <Interface />
        </section>

        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="projects" data-aos="fade-up">
          <Project />
        </section>

        <section id="skills" data-aos="fade-up">
          <Skills />
        </section>

        <section id="education" data-aos="fade-up">
          <Edu />
        </section>

        <section id="certificates" data-aos="fade-up">
          <Certificate />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>

      <Footer />

    </>
  );
}

export default App;
