"use client";

import Project_prop from "./Project_prop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIITV from "../assets/IIITV_Logo.png";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      className="p-5 mx-16 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-12">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
          PROJECTS
        </h1>

        <div
          className="EXPERIENCE mt-16 grid gap-14 max-sm:gap-8 max-sm:grid-cols-1 grid-cols-3"
          data-aos="zoom-in-up"
        >
          <Project_prop
            img={IIITV}
            title="Movie Recommendation System"
            para="AI movie recommender using LLaMA, spaCy, and Neo4j for personalized results."
            github_link="https://github.com/Vedmeena21/MovieRecommenderSystem"
            link="https://github.com/Vedmeena21/MovieRecommenderSystem"
          />
          <Project_prop
            img={IIITV}
            title="Multi-threaded LRU Cache in C++"
            para="Built a thread-safe LRU cache enabling fast, concurrent data access."
            github_link="https://github.com/Vedmeena21/Multi-threaded-LRU-Cache"
            link="https://github.com/Vedmeena21/Multi-threaded-LRU-Cache"
          />
          <Project_prop
            img={IIITV}
            title="AskMyPDF"
            para="AI tool using LangChain and LLMs to answer PDF-based questions."
            github_link="https://github.com/Vedmeena21/AskMyPDF"
            link="https://github.com/Vedmeena21/AskMyPDF"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
