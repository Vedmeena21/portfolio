"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Corrected image path (NO SPACES)
import Badm_Sec from "../assets/badm_sec.jpeg";
import Webriy from "../assets/Webriy.png";
import Literature from "../assets/literature.png";
import MercerMettl from "../assets/Mercer Mettl.png";

import {
  GDSC,
  IITB,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        id="experience"
        className="p-5 mx-5 md:mx-10 lg:mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2"
      >
        <div className="WRAPPER mt-12">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-10 sm:gap-12 md:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            data-aos="zoom-in-up"
          >
            {/* Mercer | Mettl Internship */}
            <Exp_prop
              img={MercerMettl}
              title="Mercer | Mettl"
              subtitle="Software Developer Intern"
              date="Jan 2026 - Present"
              location="Gurugram, Haryana, India"
              para="• Implemented a RAG pipeline in Python, mapping Job Descriptions to competencies using E5 and pgvector.
• Designed PostgreSQL schema with IVFFlat index on 1024-dim vectors for semantic similarity search.
• Integrated Qwen 4B on AWS, extracting structured JD signals and metadata in one LLM call.
• Tech Stack: Python, PostgreSQL, pgvector, E5 Embeddings, Qwen 4B, AWS"
            />

            {/* Webriy Internship */}
            <Exp_prop
              img={Webriy}
              title="Webriy"
              subtitle="Software Developer Intern"
              date="May 2025 - Oct 2025"
              location="Noida, Uttar Pradesh, India"
              para="• Implemented chatbot using RAG (prevents hallucinations), LLM (generates responses), LangChain (chains prompts) and in-context learning; used few-shot learning with 15+ example prompts to improve accuracy.
• Built RESTful APIs for document queries and automated backend workflows using Python scripts efficiently.
• Tech Stack: Python, MySQL, FastAPI, LangChain, RAG, Docker, Git/GitHub"
            />

            {/* GDSC IIIT Vadodara */}
            <Exp_prop
              img={GDSC}
              title="GDSC IIIT Vadodara"
              subtitle="Member"
              date="September 2023 - September 2024"
              para="• Selected through a competitive process to lead campus-wide tech initiatives, resulting in increased developer community engagement and launching mentorship programs that supported over 80 students.
• Spearheaded 5+ technical workshops in ML, Google Cloud, Web Development, upskilling 80+ students."
            />

            {/* Badminton Club */}
            <Exp_prop
              img={Badm_Sec}
              title="Badminton Club, IIIT Vadodara"
              subtitle="Club Secretary"
              date="August 2023 - May 2025"
              para="- Served as the Secretary of the Badminton Club at IIIT Vadodara, organizing tournaments and managing club events."
            />

            {/* Literature Committee */}
            <Exp_prop
              img={Literature}
              title="Literature Committee, IIITV-ICD"
              subtitle="Member"
              date="September 2023 - May 2024"
              para="• Led the organization of the institute’s flagship literary festival, attracting over 1,500 participants through hybrid digital and in-person events while securing sponsorships exceeding ₹60,000.
• Curated literary events including debates, poetry recitals, workshops, attracting 150+ participants."
            />

            {/* IIT Bombay Techfest */}
            <Exp_prop
              img={IITB}
              title="IIT Bombay Techfest 2017"
              subtitle="Junior Participant"
              date="December 2017"
              para="- Developed an automated waste segregation system using Arduino and sensors, designed to classify waste into biodegradable and non-biodegradable categories."
            />
          </div>
        </div>
      </section>

      <Skills />
    </>
  );
};

export default Experience;
