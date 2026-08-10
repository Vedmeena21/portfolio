import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import ProfileImg from "../assets/profile.jpg";
import {
  Code,
  FileCode,
  Globe,
  Database,
  Terminal,
  Server,
  Tv,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

export interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className: string;
}

const SkillCard = ({ icon: Icon, title, description, className }: SkillCardProps) => (
  <div
    className={`bg-white/5 dark:bg-slate-800/50 backdrop-blur-md p-4 rounded-xl border border-slate-600 dark:border-slate-700 shadow-md text-[#00040f] dark:text-slate-300 ${className}`}
  >
    <Icon className="w-6 h-6 mb-2 text-amber-500 dark:text-cyan-300" />
    <h3 className="text-lg font-bold text-[#00040f] dark:text-slate-300">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-slate-500">{description}</p>
  </div>
);

const AboutMe = (): JSX.Element => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="aboutme"
      className="EXPERIENCE p-5 mx-5 md:mx-10 lg:mx-16 mb-10 font-['Poppins'] overflow-hidden max-sm:p-2"
      data-aos="fade-up"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center mb-8 max-sm:text-4xl">
        ABOUT ME
      </h1>

      <div className="WRAPPER mt-12 flex flex-col md:flex-row items-center justify-center gap-10 max-md:gap-6">
        {/* Left Side — Short Intro */}
        <div className="w-full md:w-[35%] flex flex-col justify-center text-gray-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          {/* Circular Profile Photo */}
          <div className="mb-6 flex justify-center">
            <img
              src={ProfileImg}
              alt="Ved Prakash Meena"
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-cyan-500 shadow-lg"
            />
          </div>

          <p className="mt-4">
            Final-year CSE student at{" "}
            <span className="font-semibold text-[#00040f] dark:text-slate-200">
              IIIT Vadodara
            </span>, specializing in AI/ML and Full-Stack development.
          </p>
          <p className="mt-2">
            Building with LLMs, RAG, FastAPI, React, and C++. Experience in scalable backend systems and intelligent applications.
          </p>
          <p className="mt-2">
            Open to Software Engineering, AI/ML Engineering, Backend, and Full-Stack roles.
          </p>
        </div>

        {/* Right Side — Your Original Box (slightly right shifted) */}
        <div className="w-full md:w-[60%] flex justify-center items-center md:pl-6">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              className="relative w-full min-h-[400px] md:h-[500px] rounded-xl overflow-hidden p-4 sm:p-6
              bg-gradient-to-tl from-amber-500 via-orange-600 to-yellow-500 dark:from-[#00040f] dark:to-[#0B274C]
              border border-slate-600 dark:border-slate-700 shadow-lg"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 grid-rows-auto md:grid-rows-6 gap-3 sm:gap-4 h-full w-full">
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
