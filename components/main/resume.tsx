import Image from "next/image";
import Link from "next/link";

import { RESUMES } from "@/constants";

export const Resume = () => {
  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Resume
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {RESUMES.map((resume) => (
          <div
            key={resume.name}
            className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm flex flex-col items-center text-center"
          >
            <div className="w-full h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={resume.image}
                alt={`${resume.name} preview`}
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{resume.name}</h3>
            <p className="text-gray-300 mb-4">{resume.description}</p>
            <Link
              href={resume.link}
              target="_blank"
              rel="noreferrer noopener"
              className="button-primary py-2 px-6 rounded-lg text-white"
            >
              View & Download
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};


