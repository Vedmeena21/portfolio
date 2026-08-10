export interface ExperienceCardProps {
  img: string;
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  para: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <>
      <div className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] min-h-[420px] max-sm:min-h-[400px] p-8 hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]">
        <div className="HEADER flex ">
          <div className="max-w-[80px] pr-3 mr-3 flex-shrink-0">
            <img src={props.img} alt="" className="w-full h-auto" />
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold ">
              {props.title}
            </h1>
            <p className="text-[#00040f] dark:text-white text-lg my-2">
              {props.subtitle}
            </p>
            <p className="italic text-sm text-slate-700 dark:text-slate-300">{props.date}</p>
            {props.location && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{props.location}</p>
            )}
          </div>
        </div>
        <ul className="text-sm text-slate-700 dark:text-slate-300 mt-5 p-2 space-y-2">
          {props.para.split("\n").map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ExperienceCard;
