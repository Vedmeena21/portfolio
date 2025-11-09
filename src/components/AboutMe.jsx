"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  Code,
  FileCode,
  Globe,
  Database,
  Terminal,
  Server,
  Tv,
  GitBranch,
} from "lucide-react";

const SkillCard = ({ icon: Icon, title, description, className }) => (
  <div
    className={`bg-white/5 dark:bg-slate-800/50 backdrop-blur-md p-4 rounded-xl border border-slate-600 dark:border-slate-700 shadow-md text-[#00040f] dark:text-slate-300 ${className}`}
  >
    <Icon className="w-6 h-6 mb-2 text-amber-500 dark:text-cyan-300" />
    <h3 className="text-lg font-bold text-[#00040f] dark:text-slate-300">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-slate-500">{description}</p>
  </div>
);

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="aboutme"
      className="EXPERIENCE p-5 mx-16 mb-10 font-['Poppins'] overflow-hidden max-sm:p-2 max-sm:mx-5"
      data-aos="fade-up"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center mb-8 max-sm:text-4xl">
        ABOUT ME
      </h1>

      <div className="WRAPPER mt-12 flex flex-row items-center justify-center gap-10 max-md:flex-col max-md:mx-5 max-md:gap-6">
        {/* Left Side — Short Intro */}
        <div className="w-[35%] max-md:w-full flex flex-col justify-center text-gray-600 dark:text-slate-400 text-lg leading-relaxed">
          <p>
            Hey there! I’m{" "}
            <span className="font-semibold text-[#00040f] dark:text-slate-200">
              Ved Prakash Meena
            </span>
            , a passionate web and AI developer from IIIT Vadodara.
          </p>
          <p className="mt-3">
            I love crafting digital solutions that combine creativity, design,
            and smart technology to solve real-world problems.
          </p>
        </div>

        {/* Right Side — Your Original Box (slightly right shifted) */}
        <div className="w-[60%] max-md:w-full flex justify-center items-center pl-6">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              className="relative w-full h-[500px] rounded-xl overflow-hidden p-6
              bg-gradient-to-tl from-amber-500 via-orange-600 to-yellow-500 dark:from-[#00040f] dark:to-[#0B274C]
              border border-slate-600 dark:border-slate-700 shadow-lg"
            >
              <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full w-full">
                <SkillCard
                  icon={Code}
                  title="Python"
                  description="Expert level proficiency"
                  className="col-span-3 row-span-2"
                />
                <SkillCard
                  icon={FileCode}
                  title="JavaScript"
                  description="Frontend & backend development"
                  className="col-span-3 row-span-2"
                />
                <SkillCard
                  icon={Globe}
                  title="React.js"
                  description="UI Library"
                  className="col-span-2 row-span-2"
                />
                <SkillCard
                  icon={Database}
                  title="SQL"
                  description="Database"
                  className="col-span-2 row-span-2"
                />
                <SkillCard
                  icon={Terminal}
                  title="C++"
                  description="Programming"
                  className="col-span-2 row-span-2"
                />
                <SkillCard
                  icon={Server}
                  title="Node.js"
                  description="Backend development"
                  className="col-span-3 row-span-2"
                />
                <SkillCard
                  icon={Tv}
                  title="LLMs & RAG"
                  description="Building intelligent retrieval systems"
                  className="col-span-3 row-span-2"
                />
                <SkillCard
                  icon={GitBranch}
                  title="AI & Machine Learning"
                  description="Model development & deployment"
                  className="col-span-3 row-span-2"
                />
                <SkillCard
                  icon={Code}
                  title="Next.js"
                  description="React framework"
                  className="col-span-3 row-span-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
