import Navbar from "./components/Navbar";
import About from "./components/About";      // Existing About section with id="about"
import AboutMe from "./components/AboutMe";  // New AboutMe section with id="aboutme"
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HashLoader from "react-spinners/HashLoader";

import { useState, useEffect } from "react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <HashLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="h-20"></div>
          <About />    
          <div className="h-32"></div>
          <AboutMe />  
          <div className="h-32"></div>
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
