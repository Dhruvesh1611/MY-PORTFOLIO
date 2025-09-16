import { EDUCATION } from "@/constants";

export const Education = () => {
  return (
    <section id="education" className="flex flex-col items-center justify-center py-20 px-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Education
      </h1>
      <div className="max-w-4xl w-full space-y-8">
        {EDUCATION.map((ed) => (
          <div key={`${ed.school}-${ed.degree}`} className="border border-[#2A0E61] rounded-xl p-6 text-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="text-xl font-semibold">{ed.degree} · {ed.school}</div>
              <div className="text-sm text-gray-400">{ed.period} · {ed.location}</div>
            </div>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
              {ed.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};


