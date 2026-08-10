import {
  Github,
  Git,
  TailwindCSS,
  ReactLogo,
  Python,
  Javascript,
  CPP,
  C,
} from "../constants/assets";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, type ReactElement } from "react";
import SkillIcon from "./SkillIcon";

// ✅ Official online logo URLs
const FastAPI = "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png";
const SQL = "https://cdn-icons-png.flaticon.com/512/4248/4248443.png";
const VSCode =
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg";
const HuggingFace =
  "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"; // 🤗 AI/ML logo

function Skills(): ReactElement {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="EXPERIENCE p-5 mx-5 md:mx-10 lg:mx-20 mb-10 font-['Poppins'] max-sm:p-2">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center max-sm:text-4xl">
          SKILLS
        </h1>

        <div
          className="IMG grid place-content-center justify-items-center p-5 max-sm:p-2 mt-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
          data-aos="zoom-out-up"
        >
          {/* ✅ Core Programming & Web */}
          <SkillIcon img={Javascript} />
          <SkillIcon img={ReactLogo} />
          <SkillIcon img={TailwindCSS} />
          <SkillIcon img={CPP} />
          <SkillIcon img={C} />
          <SkillIcon img={Python} />

          {/* ✅ Backend, Database & AI */}
          <SkillIcon img={FastAPI} />
          <SkillIcon img={SQL} />
          <SkillIcon img={HuggingFace} />
          <SkillIcon img={VSCode} />
          <SkillIcon img={Git} />
          <SkillIcon img={Github} />
        </div>
      </section>
    </>
  );
}

export default Skills;
