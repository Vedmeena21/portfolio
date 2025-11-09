"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Badm_Sec from "../assets/Badm Sec.jpeg"; // For Badminton Club
import Webriy from "../assets/webriy.png"; // For Webriy internship
import Literature from "../assets/literature.png"; // For Literature Committee

import {
  GDSC,
  IIITians,
  IITB,
} from "../constants/Constant"; // Removed Sports import

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            {/* ✅ Webriy Internship (Most Recent) */}
            <Exp_prop
              img={Webriy}
              title="Webriy"
              subtitle="Software Developer Intern"
              date="May 2025 - October 2025"
              para="- Worked as a Backend Developer Intern focusing on building APIs with FastAPI and integrating AI/ML modules for automation and intelligent data processing."
            />

            {/* GDSC IIIT Vadodara */}
            <Exp_prop
              img={GDSC}
              title="GDSC IIIT Vadodara"
              subtitle="Core Team Member"
              date="September 2023 - September 2024"
              para="- Core Team Member at GDSC IIIT Vadodara, contributing to technical events, hackathons, and web development workshops."
            />

            {/* IIITians Network */}
            <Exp_prop
              img={IIITians}
              title="IIITians Network"
              subtitle="Tech Team Member"
              date="May 2024 - December 2024"
              para="- Worked as part of the tech team in building and maintaining the IIITians community networking platform connecting students across IIITs."
            />

            {/* Badminton Club, IIIT Vadodara */}
            <Exp_prop
              img={Badm_Sec}
              title="Badminton Club, IIIT Vadodara"
              subtitle="Club Secretary"
              date="August 2023 - May 2025"
              para="- Served as the Secretary of the Badminton Club at IIIT Vadodara, organizing tournaments and managing club events."
            />

            {/* Literature Committee, IIITV-ICD */}
            <Exp_prop
              img={Literature}
              title="Literature Committee, IIITV-ICD"
              subtitle="Core Team Member"
              date="September 2023 - May 2024"
              para="- Contributed to the Literature Committee, assisting in organizing debates, poetry events, and creative writing sessions for the institute’s annual fest."
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
