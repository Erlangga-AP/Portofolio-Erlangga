import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import NavBarLeft from "../components/NavBarLeft";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Testimonials from "../components/Testimonials";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <NavBarLeft />
      <Hero />
      <AboutMe />
      <Skill />
      <Experience />
      <Project />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}
