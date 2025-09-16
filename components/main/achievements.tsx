import { ACHIEVEMENTS } from "@/constants";

export const Achievements = () => {
  return (
    <section id="achievements" className="flex flex-col items-center justify-center py-20 px-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Achievements
      </h1>
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((a) => (
          <div key={`${a.title}-${a.year}`} className="border border-[#2A0E61] rounded-xl p-6 text-gray-200">
            <div className="text-lg font-semibold">{a.title}</div>
            <div className="text-sm text-gray-400">{a.year}</div>
            <p className="text-gray-300 mt-2">{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


