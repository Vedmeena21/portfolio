import Lottie from "lottie-react";
import education from "../assets/lottie/education.json";
import IIITV_Logo from "../assets/IIITV_Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = (): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-5 md:mx-10 lg:mx-20 mb-10 font-['Poppins'] max-sm:p-2"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-5 max-sm:text-4xl">
          Education
        </h1>

        <div
          className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
          <div className="max-w-full md:max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={IIITV_Logo}
                alt="IIIT Vadodara"
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[16px] sm:text-[18px] md:text-2xl from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold w-full max-w-[300px] tracking-wider">
                Indian Institute of Information Technology Vadodara
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                Bachelor of Technology
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                2022 - 2026
              </p>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Computer Science and Engineering
              </p>
            </div>
          </div>

          <Lottie
            animationData={education}
            loop={true}
            className="max-w-full md:max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
