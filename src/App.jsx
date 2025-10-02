
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CustomCursor from './components/CustomCursor';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ContactSection from './components/ContactSection';
import ProgressBar from './components/ProgressBar';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection id="home"/>
      <CustomCursor />
      <AboutSection id="about"/>
      <ProjectSection id="projects"/>
      <ContactSection id="contact"/>
      <ProgressBar />
    </>
  );
}

export default App;

