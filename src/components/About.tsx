import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";

const About = (): JSX.Element => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-5 md:mx-10 lg:mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2"
      >
        <div className="WRAPPER mt-6 flex max-sm:flex-col gap-5">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[40px] max-sm:leading-[50px] sm:text-[50px] sm:leading-[60px] md:text-[60px] md:leading-[70px] lg:text-[70px] lg:leading-[80px]">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 break-words">
              <span className="text-[80px] max-sm:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-semibold">V</span>
              <span className="text-[70px] max-sm:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-semibold">ed </span>
              <span className="text-[80px] max-sm:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-semibold">P</span>
              <span className="text-[70px] max-sm:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-semibold">rakash </span>
              <span className="text-[80px] max-sm:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-semibold">M</span>
              <span className="text-[70px] max-sm:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-semibold">eena</span>
            </span>


            <p className="ABOUT text-xl max-sm:text-[14px] sm:text-[16px] md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-full md:max-w-[550px] mt-5 pl-1">
              Software Developer | AI/ML & Full-Stack Engineering<br />
              LLMs | RAG | React | FastAPI | C++
            </p>
          </div>

          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-full md:max-w-[500px] lg:max-w-[650px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </section>
    </>
  );
};
export default About;