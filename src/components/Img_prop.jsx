const Img_prop = ({ img }) => {
  return (
    <>
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] shadow-xl shadow-slate-300 dark:shadow-lg dark:shadow-blue-500/50 bg-gradient-to-bl from-[#ccc] to-[#eee] dark:from-[#051937] dark:to-[#222] rounded-full place-content-center grid">
        <img src={img} alt="html" className="h-8 sm:h-10 md:h-12 lg:h-[55px] w-auto" />
      </div>
    </>
  );
};
export default Img_prop;
