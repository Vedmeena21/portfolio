import type { ReactNode } from "react";
import { SiGithub } from "react-icons/si";

export interface ProjectCardProps {
  img: string;
  title: string;
  para: string;
  github_link: string;
  link: string;
  html5?: ReactNode;
  css3?: ReactNode;
  javascript?: ReactNode;
  tailwindcss?: ReactNode;
  react?: ReactNode;
  vite?: ReactNode;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <>
      <div className="border-[#00040f] shadow-xl bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl p-6 max-sm:p-4 hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C] flex flex-col h-full">
        <div className="HEADER">
          <div className="HEADING flex gap-5 max-sm:gap-3">
            <div className="flex-shrink-0">
              <img
                src={props.img}
                alt=""
                className="w-[90px] h-[90px] max-sm:w-[80px] max-sm:h-[80px] rounded-full border border-[#00040f] object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-lg max-sm:text-base mb-2 line-clamp-2">
                {props.title}
              </h1>
              <h3 className="text-[#00040f] dark:text-slate-200 text-sm mb-1">
                Tech Stack
              </h3>

              <div className="flex gap-1 flex-wrap">
                {props.html5}
                {props.css3}
                {props.javascript}
                {props.tailwindcss}
                {props.react}
                {props.vite}
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm max-sm:text-xs px-2 flex-grow">
          {props.para}
        </p>

        <div className="flex gap-4 items-center text-[#00040f] dark:text-slate-200 p-2 mt-5">
          <a href={props.github_link} title="GitHub" className="hover:text-cyan-500 transition-colors">
            <SiGithub className="text-2xl max-sm:text-xl" />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer" title="Live Link" className="hover:text-cyan-500 transition-colors text-2xl max-sm:text-xl">
            🔗
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
