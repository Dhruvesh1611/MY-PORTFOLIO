import Image from "next/image";
import Link from "next/link";

import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section id="certifications" className="flex flex-col items-center justify-center py-20 px-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Certifications
      </h1>
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS.map((c) => (
          <div
            key={`${c.name}-${c.year}`}
            className="border border-[#2A0E61] rounded-xl overflow-hidden hover:border-purple-400 transition bg-black/30"
          >
            {c.image && (
              <div className="w-full h-48 relative">
                <Image
                  src={c.image}
                  alt={`${c.name} certificate`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4 text-gray-200">
              <div className="text-lg font-semibold">{c.name}</div>
              <div className="text-sm text-gray-400">{c.issuer} · {c.year}</div>
              <div className="mt-3">
                <Link
                  href={c.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-primary py-2 px-4 rounded-lg text-white inline-block"
                >
                  View Certificate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


