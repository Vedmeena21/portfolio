import Navbar from "./components/Navbar";
import About from "./components/About"; // About section with id="about"
import AboutMe from "./components/AboutMe"; // AboutMe section with id="aboutme"
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div className="h-10 sm:h-16 md:h-20"></div>
      <About />
      <div className="h-16 sm:h-24 md:h-32"></div>
      <AboutMe />
      <div className="h-16 sm:h-24 md:h-32"></div>
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
