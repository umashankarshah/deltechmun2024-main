
const Heading = ({ background, main }) => {
  return (
    <div className="flex place-items-end justify-center w-full overflow-hidden">
      <div className="relative mb-2 opacity-60 text-[#E5E5E5] text-5xl sm:text-6xl lg:text-8xl font-bold uppercase font-merriweather tracking-wide">
        {background}
      </div>
      <div className="absolute uppercase text-slate-700 text-3xl sm:text-4xl lg:text-6xl font-bold font-merriweather tracking-wider">
        {main}
      </div>
    </div>
  );
};

export default Heading;
